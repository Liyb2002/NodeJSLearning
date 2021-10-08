from django.db import models

# Create your models here.

class Transactions(models.Model):
    name = models.CharField(max_length=20)
    price = models.IntegerField()
    time = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return 'name:{}'.format(self.name)

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title