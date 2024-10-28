from datetime import date, datetime
import re
from django.core.exceptions import ValidationError


def validate_telefone(telefone):
    if not re.match(r'^\d{10,11}$', telefone):
        raise ValidationError('Numero de telefone invalido')

    
def validate_email_registrado(email):
    from .models import Contato
    if Contato.objects.filter(email=email).exists():
        raise ValidationError('Este email ja esta sendo utilizado por outro candidato.')
    
def validate_inicio_termino(inicio, termino):
    if (termino) and (inicio > termino):
        raise ValidationError('A data de termino deve ser posterior a data de inicio.')