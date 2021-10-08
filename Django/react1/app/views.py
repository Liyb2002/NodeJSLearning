from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from app.models import Transactions
from datetime import datetime
from rest_framework import viewsets
from .serializers import TransactionSerializer

# Create your views here.


class add(View):
    def get(self, request, name, price):
        serializer_class = TransactionSerializer
        this_transaction = Transactions.objects.create(
            name=name, price=price)
        return HttpResponse('new transaction created')


class showAllPage(View):
    TEMPLATE = 'index.html'
    def get(self, request):
        transactions_all=Transactions.objects.all()
        return render(request, self.TEMPLATE, {"transactions_all": Transactions.objects.all() })

        