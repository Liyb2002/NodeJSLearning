from django.contrib import admin
from .models import Transactions

class TransactionsAdmin(admin.ModelAdmin):
    list = ('name', 'price', 'time')

admin.site.register(Transactions, TransactionsAdmin)