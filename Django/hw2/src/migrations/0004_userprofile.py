# Generated by Django 3.2.7 on 2021-10-04 03:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('src', '0003_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Userprofile',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('birthday', models.CharField(blank=True, default='', max_length=100)),
                ('user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='src.user')),
            ],
        ),
    ]
