import markdown
from .models import Blog
from django.shortcuts import render
from .serializers import BlogSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def blogs(request):
    blogs  = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def blog(request, id):
    blog = Blog.objects.get(id=id)
    serializer = BlogSerializer(blog)
    return Response(serializer.data)