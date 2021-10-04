from django.db import models

# Create your models here.

class Test(models.Model):
    name = models.CharField(max_length=20)
    age = models.IntegerField()

class User(models.Model):
    username = models.CharField(max_length=50, blank=False)
    age = models.SmallIntegerField(default=0)
    phone = models.SmallIntegerField(db_index = True, blank=True, default=0)
    info = models.TextField()
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now = True)

class Userprofile(models.Model):
    user = models.OneToOneField(User, blank=True, null=True, on_delete = models.SET_NULL)
    birthday = models.CharField(max_length=100, blank=True, default='')

class Group(models.Model):
    #id = models.IntegerField(primary_key = True)
    user = models.ManyToManyField(User, related_name='group')
    name = models.CharField(max_length=20)
    create_time = models.IntegerField()