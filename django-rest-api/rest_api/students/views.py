from django.shortcuts import render
from django.http import JsonResponse

def StudentsView(request):
	data = { 'id': 1, 'student_name': 'Dev', 'student_branch': 'Electronics'  }
	return JsonResponse(data)

