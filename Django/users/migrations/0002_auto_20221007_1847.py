# Generated by Django 3.0.5 on 2022-10-07 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='role',
            field=models.CharField(blank=True, choices=[('Admin', 'Admin'), ('Employee', 'Employee'), ('User', 'User')], max_length=255, null=True, verbose_name='Role'),
        ),
    ]
