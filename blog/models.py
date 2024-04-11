import markdown
from django.db import models
from django.utils import timezone
from django.db import models
from django.contrib.auth.models import User

# Create your models here
class Author(models.Model):
    name = models.CharField(max_length=122, default='dataidea')
    email = models.CharField(max_length=122, default='datasideaofficial@gmail.com')
    image = models.ImageField(upload_to='author_images/')
    profile = models.CharField(max_length=122, default='No profile provided')

    def __str__(self):
        return self.name
    
class Category(models.Model):
    name = models.CharField(max_length=122, default='New category')
    description = models.CharField(max_length=122, default='New category description')
    color = models.CharField(max_length=122, default='purple')

    def __str__(self):
        return self.name
    
    
class Blog(models.Model):
    title = models.CharField(max_length=122)
    author = models.ForeignKey(to=Author, on_delete=models.CASCADE, default=1)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE, default=1)
    cover_image = models.ImageField(upload_to='blog_images/')
    featured = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True, blank=True)
    content_markdown = models.TextField(default='')

    @property
    def content_html(self):
        return markdown.markdown(self.content_markdown)

    def __str__(self):
        return self.title