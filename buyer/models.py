from django.db import models
from django.conf import settings
User = settings.AUTH_USER_MODEL
# Create your models here.

class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.CharField(max_length=100, default="")
    phone_number = models.CharField(max_length=100, default = "")
    message = models.TextField(max_length=300, default="")
    price_of_apple = models.FloatField(default=2.50)
    number_of_apples = models.PositiveIntegerField(default=0)
    amount = models.FloatField(default=0.00)
    charge = models.FloatField(default=0.00)
    amount_received = models.FloatField(default=0.00)
 
    #verified = models.BooleanField(default=False)
    
    def amount_total(self):
        price_of_apple = self.price_of_apple
        number_of_apples = self.number_of_apples
        total = (price_of_apple)*(number_of_apples)

        return total

    def charge_calc(self):
        amount = self.amount
        charge_total = (amount) * (0.07)

        return charge_total

    def amount_received_calc(self):
        amount = self.amount
        charge = self.charge
        amount_received = (amount) - (charge)

        return amount_received


    def save(self, *args, **kwargs):
        self.amount = self.amount_total()
        self.charge = self.charge_calc()
        self.amount_received = self.amount_received_calc()

        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.email} payment'