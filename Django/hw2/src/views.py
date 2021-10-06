from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from src.models import Test, Transactions
from datetime import datetime


# Create your views here.


class Index2(View):
    def get(self, request, name, age):
        test1 = Test.objects.get(id=1)

        return HttpResponse('hello i am {0}, age is {1}, id is {2}'.format(name, age, test1.age))

class add(View):
    def get(self, request, name, price):
        this_transaction = Transactions.objects.create(
            name=name, price=price)
        return HttpResponse('new transaction created')


class showAllPage(View):
    TEMPLATE = 'index.html'
    def get(self, request):
        transactions_all=Transactions.objects.all()
  

        return render(request, self.TEMPLATE, 
        {"transactions_all": Transactions.objects.all() })

        #return HttpResponse('hi this is showAll page')