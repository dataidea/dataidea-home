from django.shortcuts import render
from .models import Course
from rest_framework.response import Response
from .serializers import CourseSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from django.http import FileResponse

# Create your views here.
def schoolHome():
    pass

@api_view(['GET'])
def courses(request):
    materials = Course.objects.all()
    serializer = CourseSerializer(materials, many=True)
    return Response(data=serializer.data)

@api_view(['GET', 'POST'])
def searchCourses(request):
    query = request.POST.get(key='query')
    materials = Course.objects.filter(Q(name__icontains=query))
    serializer = CourseSerializer(materials, many=True)
    return Response(serializer.data)

# @login_required(login_url='accounts:signin')
@api_view(['GET'])
def downloadCourseMaterials(request, id):
    course = get_object_or_404(Course, pk=id)
    return FileResponse(course.materials)