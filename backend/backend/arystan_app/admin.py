from django.contrib import admin
from .models import Course, Category

class CourseAdmin(admin.ModelAdmin):
  pass
admin.site.register(Course, CourseAdmin)

class CategoryAdmin(admin.ModelAdmin):
  pass
admin.site.register(Category, CategoryAdmin)
