from django.urls import path
from .views import Index2,LessonFourPageOne,LessonFourPageTwo

urlpatterns = [
    path('<str:name>/<int:age>', Index2.as_view(), name='index'),
    path('fourPageOne/<str:message_type>', LessonFourPageOne.as_view()),
    path('fourPageTwo/<str:message_type>', LessonFourPageTwo.as_view()),
]