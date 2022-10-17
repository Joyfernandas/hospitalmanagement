from struct import pack
from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Hospital)
admin.site.register(Patient)
admin.site.register(Specialist_doctor)
admin.site.register(Doctor)
admin.site.register(Employee)
admin.site.register(Appointment)
admin.site.register(Treatment)
admin.site.register(Medicine)
admin.site.register(Payment)
admin.site.register(Symptoms)
admin.site.register(Available)
admin.site.register(Discharge)


