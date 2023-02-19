
import os
from django.conf import settings
User = settings.AUTH_USER_MODEL
from django.contrib.auth.models import AbstractUser
from django.db import models
from buyer.models import *
from django.urls import reverse

import base64
import requests
import json

# Create your models here.


class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=100)




class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    #payment = models.OneToOneField(Payment, on_delete=models.CASCADE)
    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=100, default="")
    email = models.CharField(max_length=100, default="")
    phone_number = models.CharField(max_length=100, default="")
    
    amount_raised = models.IntegerField(default=0)
    amount_withdrawn = models.IntegerField(default=0)
    available_balance = models.SlugField(default=0)

    def save(self, *args, **kwargs):
        self.id = self.user.id
        self.username = self.user.username
        self.email = self.user.email
        self.phone_number = self.user.phone_number

        
        

        super().save(*args, **kwargs)


    def __str__(self):
        return f'{self.user.username} Profile'


class Withdrawal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.IntegerField(default=0, null =True)



class UserPage(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    slug = models.SlugField()
    title = models.CharField(max_length=100, default="")
    description = models.TextField(max_length=100, default="")
    profile_photo = models.TextField(null=True)
    

    def save(self, *args, **kwargs):
        self.slug = self.user.username


        super().save(*args, **kwargs)

    def __str__(self):
        return self.user.username

    def get_absolute_url(self):
        return reverse("page_detail", kwargs={"slug": self.slug})

