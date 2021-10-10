from django.urls import path
from .views import showAllPage,add,Regist,Login

urlpatterns = [
    path('showall', showAllPage.as_view(), name='showAll'),
    path('add/<str:name>/<int:price>', add.as_view(), name='showAll'),
    path('regist', Regist.as_view(), name='regist'),
    path('login', Login.as_view(), name='login'), 
] 