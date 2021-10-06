from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from src.models import Test

# Create your views here.


class Index2(View):
    def get(self, request, name, age):
        test1 = Test.objects.get(id=1)

        return HttpResponse('hello i am {0}, age is {1}, id is {2}'.format(name, age, test1.age))

class add(View):
    def get(self, request, name, age):
        test1 = Test.objects.create(name=name, age=age)

        return HttpResponse('new stuff added')


class showAllPage(View):
    def get(self, request):
        return HttpResponse('hi this is showAll page')