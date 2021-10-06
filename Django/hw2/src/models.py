from django.db import models

# Create your models here.

class Test(models.Model):
    name = models.CharField(max_length=20)
    age = models.IntegerField()

    def _str_(self):
        return 'name:{}'.format(self.name)
