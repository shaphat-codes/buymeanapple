from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver

from .models import *

#for profiles
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()



# for user page
@receiver(post_save, sender=User)
def create_userpage(sender, instance, created, **kwargs):
    if created:
        UserPage.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_userpage(sender, instance, **kwargs):
    instance.userpage.save()