from rest_framework import serializers
from .models import DadosPessoais, Contato, ExpAcademica, ExpProfissional

class DadosPessoaisSerializer(serializers.ModelSerializer):
    class Meta:
        model = DadosPessoais
        fields = '__all__'

class ContatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contato
        fields = '__all__'

class ExpProfissionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpProfissional
        fields = '__all__'

class ExpAcademicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpAcademica
        fields = '__all__'