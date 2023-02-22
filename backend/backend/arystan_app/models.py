from django.db import models


class Category(models.Model):
  name = models.CharField(max_length=256)

  class Meta:
    verbose_name = 'Категория'
    verbose_name_plural = 'Категории'

class Course(models.Model):
  name = models.CharField(max_length=256)
  category = models.ForeignKey(Category, on_delete=models.CASCADE)

  class Meta:
    verbose_name = 'Курс'
    verbose_name_plural = 'Курсы'