# Generated by Django 5.0.4 on 2024-04-10 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_rename_blogcategory_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='date_featured',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='popularity',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='slug',
        ),
        migrations.AddField(
            model_name='blog',
            name='featured',
            field=models.BooleanField(default=False),
        ),
    ]
