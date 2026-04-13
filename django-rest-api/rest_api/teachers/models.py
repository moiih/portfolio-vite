from django.db import models
from django.utils.translation import gettext_lazy as _

class TeachersModel(models.Model):
    t_id = models.CharField(verbose_name=_("Teacher's ID"), max_length=10)
    t_name = models.CharField(verbose_name=_("Teacher's Name"), max_length=30)
    t_subject = models.CharField(verbose_name=_("Teacher's Subject"), max_length=30)

    def __str__(self):
        return self.t_name