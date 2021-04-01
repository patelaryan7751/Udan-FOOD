from django.contrib import admin
from django.urls import path
from .import views

urlpatterns = [
    path('', views.Index, name='index'),
    path('accounts/login.html', views.Login, name='login'),
    path('accounts/SignUp.html', views.Signup, name='signup'),
    path('Homepage/home.html', views.Home, name='home'),
    path('Homepage/index.html', views.Index, name='index'),
    path('MEADE/index.html', views.MEADE, name='index'),
]