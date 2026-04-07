from django.urls import path
from students import views
#from . import views

urlpatterns = [
	path('', views.StudentsView),
]
