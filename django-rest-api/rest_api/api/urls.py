from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('students/', views.studentView),
    path('students/<int:pk>', views.studentDetailsView),
    path('employees/', views.EmployeesView.as_view()),
    path('employees/<int:pk>', views.EmployeeDetailsView.as_view()),
    path('teachers/', views.TeachersView.as_view()),
    path('teachers/<int:pk>', views.TeacherDetailsView.as_view()),
    # path('', include(router.urls)),
]

router = DefaultRouter()
# router.register('programmers', views.ProgrammersView, basename='programmers') # 'basename=' required for normal Viewsets
router.register(r'programmers', views.ProgrammersView) # No 'basename=' for Model-ViewSets

urlpatterns += router.urls
