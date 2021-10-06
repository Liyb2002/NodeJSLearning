from django.urls import path
from .views import Index2

urlpatterns = [
    path('<str:name>/<int:age>', Index2.as_view(), name='index'),
]