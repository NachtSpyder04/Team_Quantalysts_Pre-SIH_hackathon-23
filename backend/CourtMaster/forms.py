from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from .models import Case, User

class MyUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['name', 'email', 'password']

class CaseForm(ModelForm):
    class Meta:
        model = Case
        fields = ['case_name', 'case_number', 'case_type', 'case_info', 'case_date', 'case_time']

class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ['email', 'password']