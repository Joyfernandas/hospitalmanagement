from ast import Str
from tracemalloc import start
from unicodedata import name
from unittest.util import _MAX_LENGTH
from django.db import models
import datetime
from django.db.models.signals import post_save
from django.dispatch import receiver
from users.models import CustomUser
from django.contrib.auth.models import Group



# Create your models here.
class Hospital(models.Model):
    name=models.CharField("Name",max_length=20,blank=False, null=True)
    mobile=models.CharField("Mobile",max_length=50,blank=False,null=True)
    Address=models.CharField("Address",max_length=150,blank=False,null=True)

    def __str__(self) -> str:
        return str(self.name)

class Specialist_doctor(models.Model):
    name = models.CharField("Name",max_length = 30,blank=False,null=True)
    type=models.TextField("Type",blank=False,null=True)

    def __str__(self) -> str:
        return str(self.name)
        

class Doctor(models.Model):
    profile=models.ImageField(upload_to ='uploads',null=True,blank=True)
    name = models.CharField("Name",max_length = 50,blank=False,null=True)
    age = models.IntegerField("Age",blank=False,null=True)
    mobile = models.CharField("Mobile",blank=False,null=True,max_length=15)
    address = models.CharField("ADDRESS",max_length = 150,blank=True,null=True)
    experience = models.IntegerField("Experience",blank=False,null=True)
    def __str__(self):
        return str(self.name)
        #  + '-' + str(self.time)

class Available(models.Model):
    time=models.TimeField("Available_time",blank=False,null=True)

    def __str__(self) -> str:
        return str(self.time)

class Employee(models.Model):
    
    name = models.CharField("Name",max_length = 50,blank=True,null=True)
    age = models.IntegerField("Age",blank=True,null=True)
    mobile = models.IntegerField("Mobile",blank=True,null=True)
    address = models.CharField("ADDRESS",max_length = 150,blank=True,null=True)
    experience = models.CharField("Experience",max_length = 20,blank=False,null=True)
    

    def __str__(self) -> str:
        return str(self.name)

class Patient(models.Model):
    name=models.CharField("Name",max_length=10,blank=True,null=True)
    dob=models.DateField("DOB",blank=True,null=True)
    # gender=models.CharField("Gender",choices=[('male','Male'),('female','Female')],max_length=20,blank=False,null=True)
    address = models.TextField("Address",blank=True,null=True)
    mobile = models.CharField("Mobile",max_length = 20,blank=True,null=True)
    aadhar = models.BigIntegerField("AADHAR_NUMBER",blank=True,null=True)
    email=models.EmailField("Email",null=False,blank=False)
    password=models.CharField("Password",max_length=30,blank=True,null=False)
    Ptype = models.CharField("PatientType", max_length=100, null=True, blank=True, default='NewCustomer') 

    def __str__(self) -> str:
        return str (self.name)

            
@receiver(post_save, sender=Patient)
def event_attender_create(sender, instance, *args, **kwargs):
    if instance and kwargs['created']:
        user = CustomUser.objects.create(email=instance.email, username=instance.name.lower(),
                                         customer=instance, role="User", is_staff=True)
        user.set_password(instance.password)
        if instance.Ptype == "User":
            if Group.objects.filter(name='NewUser').exists():
                user.groups.add(Group.objects.get(name='NewUser'))
        user.save()
    return True
   

class Symptoms(models.Model):
    name=models.CharField("Name",max_length=150,blank=False,null=True)
    role=models.OneToOneField("master.Doctor",on_delete=models.CASCADE,null=True, blank=True)
    def __str__(self) -> str:
        return str(self.name)

class Appointment(models.Model):
    pat_name=models.ForeignKey("master.Patient", on_delete=models.CASCADE,null=True,blank=False)
    timing=models.ForeignKey("master.Available",on_delete=models.CASCADE,null=True,blank=False)
    symptoms = models.ForeignKey("master.Symptoms", on_delete=models.CASCADE,blank=False,null=True)
    

    def __str__(self):
        return str(self.pat_name.name)+"-"+str(self.timing.time)


class Treatment(models.Model):
    # pat_name=models.CharField("name",blank=False,null=True,max_length=30)
    doctor_name=models.ForeignKey("master.Doctor",null=True,blank=False,on_delete=models.CASCADE)
    appointment=models.ForeignKey("master.Patient",null=True,blank=False,on_delete=models.CASCADE)
    treatment_date = models.DateField("Treatment_date",auto_now=False, auto_now_add=False,blank=False,null=True)
    treatment_name=models.TextField("Treatment_name",null=True,blank=False,max_length=100)

    def __str__(self):
        return str(self.appointment.name if self.appointment else self.treatment_name)

class Medicine(models.Model):

    patient_name=models.ForeignKey("master.Patient",null=True,blank=False,on_delete=models.CASCADE)
    med_type=models.CharField("medicine_type",null=True,blank=False ,max_length=60)
    med_name=models.CharField("Medicine_Name",max_length=30,blank=False,null=True )
    limit=models.CharField("limit",max_length=20,blank=False,null=True)

    def __str__(self) -> str:
        return str(self.patient_name.name)


class Payment(models.Model):
    name=models.ForeignKey("master.Patient",null=True,blank=False,on_delete=models.CASCADE)
    mobile=models.CharField("Mobile",max_length=20,blank=False,null=True)
    doctor_fee=models.CharField("Doctor_fees",max_length=15,blank=False,null=True)
    start_date=models.DateField("start_Date",blank=False,null=True)
    end_date=models.DateField("End Date",blank=False,null=True)
    room_rent = models.CharField("Room Rent",max_length = 15,blank=False,null=True)
    Total=models.CharField("Total=",blank=False,null=True,max_length=8)

    def __str__(self) -> str:
        return str(self.name.name)


class Discharge(models.Model):

    name=models.ForeignKey("master.Patient",on_delete=models.CASCADE,blank=False,null=True)
    admit_reason = models.CharField("reason",max_length = 50,blank=False,null=True)
    invoice=models.CharField("Invoice",max_length=100,blank=False,null=True)

    def __str__(self) -> str:
        return str(self.name.name)