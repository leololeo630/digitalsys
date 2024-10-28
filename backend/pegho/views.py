from django.shortcuts import render
from rest_framework import viewsets
from .models import DadosPessoais, Contato, ExpProfissional, ExpAcademica
from .serializers import DadosPessoaisSerializer, ContatoSerializer, ExpProfissionalSerializer, ExpAcademicaSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class DadosPessoaisViewSet(viewsets.ModelViewSet):
    queryset = DadosPessoais.objects.all()
    serializer_class = DadosPessoaisSerializer
    permission_classes = [IsAuthenticated]

class ContatoViewSet(viewsets.ModelViewSet):
    queryset = Contato.objects.all()
    serializer_class = ContatoSerializer
    permission_classes = [IsAuthenticated]

class ExpProfissionalViewSet(viewsets.ModelViewSet):
    queryset = ExpProfissional.objects.all()
    serializer_class = ExpProfissionalSerializer
    permission_classes = [IsAuthenticated]

class ExpAcademicaViewSet(viewsets.ModelViewSet):
    queryset = ExpAcademica.objects.all()
    serializer_class = ExpAcademicaSerializer
    permission_classes = [IsAuthenticated]