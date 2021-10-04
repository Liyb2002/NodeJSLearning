from django.db import models

# Create your models here.

class Test(models.Model):
    name = models.CharField(max_length=20)
    age = models.IntegerField()

class User(models.Model):
    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=50, blank=False)
    age = models.SmallIntegerField(default=0)
    phone = models.SmallIntegerField(db_index = True, blank=True, default=0)
    info = models.TextField()
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now = True)