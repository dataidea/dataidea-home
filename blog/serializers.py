from rest_framework import serializers
from .models import Author, Blog, Category

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    category = CategorySerializer()
    class Meta:
        model = Blog
        fields = ['id', 'title', 'cover_image', 'date', 'featured', 'author', 'category', 'content_html']