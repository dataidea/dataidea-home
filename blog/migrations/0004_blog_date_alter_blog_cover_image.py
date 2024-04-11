# Generated by Django 5.0.4 on 2024-04-10 16:44

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_remove_blog_date_featured_remove_blog_popularity_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='blog',
            name='cover_image',
            field=models.ImageField(upload_to='blog_images/'),
        ),
    ]