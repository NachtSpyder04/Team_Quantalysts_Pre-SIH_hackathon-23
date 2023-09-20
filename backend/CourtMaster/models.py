from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100, null=True)
    email = models.EmailField(max_length=100, null=True)
    password = models.CharField(max_length=100, null=True)
    def __str__(self):
        return self.name
    
class Case(models.Model):
    case_name = models.CharField(max_length=100, null=True)
    case_number = models.CharField(max_length=100, null=True)
    case_type = models.CharField(max_length=100, null=True)
    case_info = models.CharField(max_length=100, null=True)
    case_date = models.CharField(max_length=100, null=True)
    case_time = models.CharField(max_length=100, null=True)
    def __str__(self):
        return self.name
    
