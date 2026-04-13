from django.db import models
from django.utils.translation import gettext_lazy as _

class EmployeesModel(models.Model):
    emp_id = models.CharField(verbose_name=_("Employeee ID"), max_length=10)
    emp_name = models.CharField(verbose_name=_("Employee Name"), max_length=30)
    emp_designation = models.CharField(verbose_name=_("Employeee Designation"), max_length=50)

    def __str__(self):
        return self.emp_name