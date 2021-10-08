from django.urls import path
from .views import showAllPage,add

urlpatterns = [
    path('showall', showAllPage.as_view(), name='showAll'),
    path('add/<str:name>/<int:price>', add.as_view(), name='showAll')
] 