from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import MyUserCreationForm, CaseForm
from .models import Case, User
from django.contrib.auth.decorators import login_required
from .serializers import CaseSerializer
from rest_framework import viewsets



# Create your views here.

class CaseView(viewsets.ModelViewSet):
    queryset = Case.objects.all()
    serializer_class = CaseSerializer
