from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from master.models import *

class hospitalserializers(serializers.ModelSerializer):
    class Meta:
        model=Hospital
        fields='__all__'

class specialist_doctorserializers(serializers.ModelSerializer):
    class Meta:
        model=Specialist_doctor
        fields='__all__'

class Doctorserializers(serializers.ModelSerializer):
    class Meta:
        model=Doctor
        fields='__all__'

class Availableserializers(serializers.ModelSerializer):
    class Meta:
        model=Available
        fields='__all__'
    
class Employeeserializers(serializers.ModelSerializer):
    class Meta:
        model=Employee
        fields='__all__'
class Patientserializers(serializers.ModelSerializer):
    class Meta:
        model=Patient
        fields='__all__'
class Symptomsserializers(serializers.ModelSerializer):
    class Meta:
        model=Symptoms
        fields='__all__'

class Appointmentserializers(serializers.ModelSerializer):
    class Meta:
        model=Appointment
        fields='__all__'
        
    def to_representation(self, instance):
        res= super().to_representation(instance)
        res['pat_name']=[instance.pat_name.name]
        res['timing']=[instance.timing.time]
        res['symptoms']=[instance.symptoms.name]
        return res

class Treatmentserializers(serializers.ModelSerializer):
    class Meta:
        model=Treatment
        fields='__all__'
    def to_representation(self, instance): 
        res= super().to_representation(instance)         
        res['doctor_name']=instance.doctor_name.name
        res['appointment']=[instance.appointment.name]
        return res

    # def to_representation(self, instance): 
    #     res= super().to_representation(instance)
    #     res[' doctor_name']=[instance. doctor_name.name]
    #     res['appointment']=[instance.appointment.name]
    #     return res

class Medicineserializers(serializers.ModelSerializer):
    class Meta:
        model=Medicine
        fields='__all__'
    def to_representation(self, instance): 
        res= super().to_representation(instance)
        res['patient_name']=[instance.patient_name.name]
        return res

class Paymentserializers(serializers.ModelSerializer):
    class Meta:
        model=Payment
        fields='__all__'
    def to_representation(self, instance): 
        res= super().to_representation(instance)
        res['name']=instance.name.name
        return res    


class Dischargeserializers(serializers.ModelSerializer):
    class Meta:
        model=Discharge
        fields='__all__'
    def to_representation(self, instance): 
        res= super().to_representation(instance)
        res['name']=instance.name.name
        return res