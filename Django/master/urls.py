from django.urls import path,include
from rest_framework import routers
from master.views import *

routers=routers.DefaultRouter()
routers.register("Hospital",hospitalview)
routers.register("Specalist",specialist_doctorview)
routers.register("Doctor",Doctorview)
routers.register("Appointment",Appointmentview)
routers.register("Available",Availableview)
routers.register("Employee",Employeeview)
routers.register("Patient",Patientview)
routers.register("Treatment",Treatmentview)
routers.register("Medicine",Medicineview)
routers.register("Payment",Paymentview)
routers.register("Discharge",Dischargeview)



urlpatterns = [
    path('api/',include(routers.urls)),
   
] 