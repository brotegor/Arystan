from django.contrib import admin
from .models import Category, Course

class CategoryAdmin(admin.ModelAdmin):
  pass
admin.site.register(Category, CategoryAdmin)

class CourseAdmin(admin.ModelAdmin):
  pass
admin.site.register(Course, CourseAdmin)
