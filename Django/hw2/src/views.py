from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request, name, age):
    #name = request.GET.get('name', '')
    #age = request.GET.get('age', 0)
    return HttpResponse('hello i am {0}, age is {1}'.format(name, age))