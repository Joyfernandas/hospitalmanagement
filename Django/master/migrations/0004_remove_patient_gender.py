# Generated by Django 3.0.5 on 2022-10-09 14:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('master', '0003_patient_password'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='patient',
            name='gender',
        ),
    ]