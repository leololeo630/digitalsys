from django.contrib import admin
from .models import DadosPessoais, Contato, ExpProfissional, ExpAcademica
# Register your models here.

class ContatoInline(admin.TabularInline):
    model = Contato
    extra = 0

class ExpProfissionalInline(admin.TabularInline):
    model = ExpProfissional
    extra = 0
    
class ExpAcademicaInline(admin.TabularInline):
    model = ExpAcademica
    extra = 0

@admin.register(DadosPessoais)
class DadosPessoaisAdmin(admin.ModelAdmin):
    list_display = ('nome', 'data_nascimento')
    search_fields = ('nome',)
    inlines = [ContatoInline, ExpProfissionalInline, ExpAcademicaInline]

@admin.register(Contato)
class ContatoAdmin(admin.ModelAdmin):
    list_display = ('email', 'telefone', 'endereco')
    search_fields = ('nome', 'telefone')

@admin.register(ExpProfissional)
class ExpProfissionalAdmin(admin.ModelAdmin):
    list_display = ('empresa', 'cargo', 'inicio', 'termino')
    list_display_links = ('empresa', 'cargo')
    search_fields = ('empresa', 'cargo')

@admin.register(ExpAcademica)
class ExpAcademicaAdmin(admin.ModelAdmin):
    list_display = ('instituicao', 'curso', 'inicio', 'termino')
    list_display_links = ('instituicao', 'curso')
    search_fields = ('instituicao', 'curso')