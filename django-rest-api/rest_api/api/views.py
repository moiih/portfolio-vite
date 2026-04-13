from django.shortcuts import render, get_object_or_404
from .serializers import StudentsSerializer, EmployeesSerializer, TeachersSerializer, ProgrammersSerializer
from students.models import StudentsModel
from employees.models import EmployeesModel
from teachers.models import TeachersModel
from programmers.models import ProgrammersModel
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.http import Http404
from rest_framework import mixins, generics, viewsets


# Implemented Using FBVs 
@api_view(['GET', 'POST'])
def studentView(request):
    if request.method == 'GET':
        students = StudentsModel.objects.all()
        serializer = StudentsSerializer(students, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # return Response(serializers.error, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'POST':
        serializer = StudentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Implemented Using FBVs 
@api_view(['GET', 'PUT', 'DELETE'])
def studentDetailsView(request, pk):
    try:
        student = StudentsModel.objects.get(pk=pk)
    except StudentsModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


    if request.method == 'GET':
        serializer = StudentsSerializer(student)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == 'PUT':
        serializer = StudentsSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

# Implemented Using Pure CBVs 
# class EmployeesView(APIView):
#     # We cannot use/modify 'queryset' and 'serializer' directly in the Class-based views(CBVs)
#     #  as they are predefined members of the CBVs.

#     # Issue in this class: 
#     #  - Not a good approach, because using it like this(emp_queryset & emp_serializer) is causing the results to be Cached, 
#     #     which do not reflect the new changes in the "fetch all" request.

#     emp_queryset = EmployeesModel.objects.all() 
#     emp_serializer =  EmployeesSerializer(emp_queryset, many=True)

#     def get(self, request):
#         return Response(self.emp_serializer.data)
    
#     def post(self, request):
#         if self.emp_serializer.is_valid():
#             self.emp_serializer.save()
#             return Response(self.emp_serializer.data, status=status.HTTP_200_OK)
#        return Response(self.emp_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Implemented Using Pure CBVs (correctly implemented version of above class)
class EmployeesView(APIView):
    def get(self, request):
        employees = EmployeesModel.objects.all()
        serializer = EmployeesSerializer(employees, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = EmployeesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

# Implemented Using Pure CBVs 
class EmployeeDetailsView(APIView):
    def get_model_object(self, primary_key): # it is a user-defined function, NOT a built-in one
        try:
            return EmployeesModel.objects.get(pk=primary_key)
        except EmployeesModel.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        employee = self.get_model_object(pk)
        serializer = EmployeesSerializer(employee)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        employee = self.get_model_object(pk)
        serializer = EmployeesSerializer(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        employee = self.get_model_object(pk)
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Implemented Using Mixins
class TeachersView(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = TeachersModel.objects.all()
    serializer_class = TeachersSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request) 
    
    # - Here in post method, the 'create' method of "CreateModelMixin" will implicitly handle
    #    the Serializer Validation ["serializer.is_valid()"], the appropriate
    #     Status Code to be pass in case of success or fail request, 
    #      and also it saves the serializer data from the post request.
    # - The "generics.GeneriAPIView" will handle the incoming and outgoing 
    #    requests (get, post).

# Implemented Using Mixins
class TeacherDetailsView(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = TeachersModel.objects.all()
    serializer_class = TeachersSerializer

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def put(self, request, pk):
        return self.update(request, pk)
    
    def delete(self, request, pk):
        return self.destroy(request, pk)
    

'''
# Implemented Using Normal ViewSets
#  We can use all [Get, Post, Get(pk), Put, Delete] in the same class using ViewSets
class ProgrammersView(viewsets.ViewSet):
    # GET
    def list(self, request):
        programmers = ProgrammersModel.objects.all()
        serializer = ProgrammersSerializer(programmers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)  # No need to pass 'status=' arg as it will be automatically(implicitly) handled by ViewSets.
    
    # POST
    def create(self, request):
        serializer = ProgrammersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # RETRIEVE (GET) by Primary Key
    def get(self, request, pk=None):
        # programmer = ProgrammersModel.objects.get(pk=pk)
        programmer = get_object_or_404(ProgrammersModel, pk=pk)
        serializer = ProgrammersSerializer(programmer)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    # PUT
    def update(self, request, pk=None):
        programmer = get_object_or_404(ProgrammersModel, pk=pk)
        serializer = ProgrammersSerializer(programmer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)

    # DELETE
    def delete(self, request, pk=None):
        programmer = get_object_or_404(ProgrammersModel, pk=pk)
        programmer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
'''
    


# Implemented Using Model-ViewSets
class ProgrammersView(viewsets.ModelViewSet):
    queryset = ProgrammersModel.objects.all()
    serializer_class = ProgrammersSerializer
    lookup_field = 'pk'
