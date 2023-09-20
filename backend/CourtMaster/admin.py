from django.contrib import admin
from .models import Case, User

# Register your models here.

class CourtMasterAdmin(admin.ModelAdmin):
    list_display = ('case_name', 'case_number', 'case_type', 'case_info', 'case_date', 'case_time')

admin.site.register(User)
admin.site.register(Case)
