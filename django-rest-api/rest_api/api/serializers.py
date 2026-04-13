from rest_framework import serializers
from students.models import StudentsModel
from employees.models import EmployeesModel
from teachers.models import TeachersModel
from programmers.models import ProgrammersModel

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentsModel
        fields = '__all__'

class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeesModel
        fields = '__all__'

class TeachersSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeachersModel
        fields = '__all__'

class ProgrammersSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammersModel
        fields = '__all__'