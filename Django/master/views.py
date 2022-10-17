from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from master.models import*
# Create your views here.

class hospitalview(viewsets.ModelViewSet):
    queryset=Hospital.objects.all()
    serializer_class=hospitalserializers

class specialist_doctorview(viewsets.ModelViewSet):
    queryset=Specialist_doctor.objects.all()
    serializer_class=specialist_doctorserializers


class Doctorview(viewsets.ModelViewSet):
    queryset=Doctor.objects.all()
    serializer_class=Doctorserializers


class Availableview(viewsets.ModelViewSet):
    queryset=Available.objects.all()
    serializer_class=Availableserializers



class Appointmentview(viewsets.ModelViewSet):
    queryset=Appointment.objects.all()
    serializer_class=Appointmentserializers

class Employeeview(viewsets.ModelViewSet):
    queryset=Employee.objects.all()
    serializer_class=Employeeserializers


class Patientview(viewsets.ModelViewSet):
    queryset=Patient.objects.all()
    serializer_class=Patientserializers


class Symptomsview(viewsets.ModelViewSet):
    queryset=Symptoms.objects.all()
    serializer_class=Symptomsserializers

class Treatmentview(viewsets.ModelViewSet):
    queryset=Treatment.objects.all()
    serializer_class=Treatmentserializers

class Medicineview(viewsets.ModelViewSet):
    queryset=Medicine.objects.all()
    serializer_class=Medicineserializers

class Paymentview(viewsets.ModelViewSet):
    queryset=Payment.objects.all()
    serializer_class=Paymentserializers

class Dischargeview(viewsets.ModelViewSet):
    queryset=Discharge.objects.all()
    serializer_class=Dischargeserializers
