from django.shortcuts import render
from django.views import View

# Create your views here.
def Index(request):
        return render(request,'Homepage/index.html')

def Home(request):
        return render(request,'Homepage/home.html')

def Login(request):
        return render(request,'accounts/login.html')

def Signup(request):
        return render(request,'accounts/SignUp.html')

def MEADE(request):
        return render(request,'MEADE/index.html')
