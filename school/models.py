from django.db import models

class Course(models.Model):
    cover_image = models.ImageField(upload_to='learning_materials/', default='learning_materials/default.jpg')
    name = models.CharField(max_length=122, default='New Course')
    description = models.TextField(default='New Course')
    student_number = models.IntegerField(default=0)
    duration = models.IntegerField(default=0)
    rating = models.FloatField(default=0)
    cost = models.IntegerField(default=0)
    materials = models.FileField(upload_to='learning_materials/', default='learning_materials/default.pdf')

   
    def __str__(self):
        return self.name
