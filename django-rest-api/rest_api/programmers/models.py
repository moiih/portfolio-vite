from django.db import models
from django.utils.translation import gettext_lazy as _

class ProgrammersModel(models.Model):
    prog_id = models.CharField(verbose_name=_("Programmer ID"), max_length=10)
    prog_name = models.CharField(verbose_name=_("Programmer's Name"), max_length=30)
    prog_lang = models.CharField(verbose_name=_("Programmer's Language"), max_length=30)

    def __str__(self):
        return self.prog_name