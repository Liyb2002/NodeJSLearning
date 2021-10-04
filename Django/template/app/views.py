#coding: utf-8

from django.shortcuts import render
from django.views.generic import View

# Create your views here.

class Index(View):
    TEMPLATE = 'index.html'

    def get(self, request, name):
        return render(request, self.TEMPLATE, 
        {'name':name})