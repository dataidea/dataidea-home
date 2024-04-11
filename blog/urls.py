from django.urls import path, include
from . import views

app_name = 'blog'

urlpatterns = [
    path(route='', view=views.blogs, name='blogs'),
    path(route='<int:id>', view=views.blog, name='blog'),
    path(route='categories', view=views.categories, name='categories')
]