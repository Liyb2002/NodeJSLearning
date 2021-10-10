from django.urls import path
from .views import showAllPage,add,Regist

urlpatterns = [
    path('showall', showAllPage.as_view(), name='showAll'),
    path('add/<str:name>/<int:price>', add.as_view(), name='showAll'),
    path('regist', Regist.as_view(), name='regist'),
] 