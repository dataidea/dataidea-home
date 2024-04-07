from django.urls import path, include
from . import views

app_name = 'school'

urlpatterns = [
    path(route='', view=views.schoolHome, name='shool_home'),
    path(route='courses', view=views.courses, name='courses'),
    path(route='download-course-material/<int:id>', view=views.downloadCourseMaterials, 
    name='download_course_material'),
]