from rest_framework import serializers
from students.models import StudentsModel

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentsModel
        fields = '__all__'