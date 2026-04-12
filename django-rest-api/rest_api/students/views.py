from django.shortcuts import render
from django.http import JsonResponse
from students.models import StudentsModel
# from rest_framework import 

def StudentsView(request):
	# data = { 'id': 1, 'student_name': 'Dev', 'student_branch': 'Electronics'  }
	students = StudentsModel.objects.all()
	students_list = students.values()
	print(students_list)
	return JsonResponse(list(students_list), safe=False)

