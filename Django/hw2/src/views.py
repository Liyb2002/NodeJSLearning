from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View

# Create your views here.

class Index2(View):
    def get(self, request, name, age):
        return HttpResponse('hello i am {0}, age is {1}'.format(name, age))
    
 
 