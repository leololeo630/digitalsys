from django.core.validators import validate_email
from django.db import models
from .validators import validate_telefone, validate_email_registrado, validate_inicio_termino
# Create your models here.

class DadosPessoais(models.Model):
    nome = models.CharField(max_length=50)
    data_nascimento = models.DateField()
    def __str__(self):
        return self.nome

class Contato(models.Model):
    dados_pessoais = models.ForeignKey(DadosPessoais, on_delete=models.CASCADE, related_name='contato')
    email = models.EmailField(validators=[validate_email, validate_email_registrado])
    telefone = models.CharField(max_length=15, validators=[validate_telefone])
    endereco = models.CharField(max_length=100)
    def __str__(self):
        return self.email
    

class ExpProfissional(models.Model):
    dados_pessoais = models.ForeignKey(DadosPessoais, on_delete=models.CASCADE, related_name='experiencias_profissionais')
    cargo = models.CharField(max_length=50)
    empresa =models.CharField(max_length=50)
    inicio = models.DateField()
    termino = models.DateField(blank=True)
    descricao = models.TextField()
    def clean(self):
         validate_inicio_termino(self.inicio, self.termino)

    def __str__(self):
        return self.empresa

class ExpAcademica(models.Model):
    dados_pessoais = models.ForeignKey(DadosPessoais, on_delete=models.CASCADE, related_name='experiencias_academicas')
    instituicao = models.CharField(max_length=50)
    curso = models.CharField(max_length=50)
    inicio = models.DateField()
    termino = models.DateField(blank=True)
    def clean(self):
        validate_inicio_termino(self.inicio, self.termino)
    def __str__(self):
        return self.instituicao
