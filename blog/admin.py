from django.contrib import admin
from .models import Blog, Author, Category

# Register your models here.
admin.site.register(model_or_iterable=[Blog, Author, Category])