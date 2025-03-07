
from django.contrib import admin
from django.urls import path
from todos import views

#dev1
urlpatterns = [path("", views.home, name="Home"),]

