from django.db import models
from django.utils.translation import gettext_lazy as _

class StudentsModel(models.Model):
    stu_rollno = models.CharField(verbose_name=_("Student's Roll No."), max_length=10)
    stu_name = models.CharField(verbose_name=_("Student's Name"), max_length=50)
    branch  = models.CharField(verbose_name=_("Student's Branch"), max_length=30)

    def __str__(self):
        '''
            Without __str__() function, only 'StudentModel object (1)' is appearing.
        '''
        return self.stu_name