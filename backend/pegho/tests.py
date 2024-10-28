from django.test import TestCase
from datetime import date
from .models import DadosPessoais, Contato, ExpProfissional, ExpAcademica
from django.core.exceptions import ValidationError

class DadosPessoaisModelTest(TestCase):

    def setUp(self):
        # Definindo um dado pessoal padrão para usar nos testes
        self.dados_pessoais = DadosPessoais.objects.create(
            nome="Leonardo Rodrigues De Oliveira",
            data_nascimento=date(2003, 10, 20)
        )

    def test_dados_pessoais_creation(self):
        """Testa se um objeto DadosPessoais pode ser criado corretamente."""
        self.assertEqual(self.dados_pessoais.nome, "Leonardo Rodrigues De Oliveira")
        self.assertEqual(self.dados_pessoais.data_nascimento, date(2003, 10, 20))

    def test_dados_pessoais_str(self):
        """Testa o método __str__ de DadosPessoais."""
        self.assertEqual(str(self.dados_pessoais), "Leonardo Rodrigues De Oliveira")

    def test_dados_pessoais_underage(self):
        """Testa a validação de idade mínima de 18 anos."""
        underage = DadosPessoais(
            nome="Carlos Menor",
            data_nascimento=date(2010,1,1)  # Idade < 18 anos
        )
        with self.assertRaises(ValidationError):
            underage.full_clean()  # Força a validação do modelo


class ContatoModelTest(TestCase):

    def setUp(self):
        self.dados_pessoais = DadosPessoais.objects.create(
            nome="Maria Vitoria",
            data_nascimento=date(1995, 5, 15)
        )
        self.contato = Contato.objects.create(
            dados_pessoais=self.dados_pessoais,
            email="mariavitoria@example.com",
            telefone="1234567890",
            endereco="Rua Exemplo, 123"
        )

    def test_contato_creation(self):
        """Testa se um objeto Contato pode ser criado corretamente."""
        self.assertEqual(self.contato.email, "mariavitoria@example.com")
        self.assertEqual(self.contato.telefone, "1234567890")
        self.assertEqual(self.contato.endereco, "Rua Exemplo, 123")

    def test_contato_str(self):
        """Testa o método __str__ de Contato."""
        self.assertEqual(str(self.contato), "mariavitoria@example.com")

    def test_email_duplicado(self):
        """Testa se a validação de email duplicado funciona corretamente."""
        with self.assertRaises(ValidationError):
            contato_duplicado = Contato(
                dados_pessoais=self.dados_pessoais,
                email="mariavitoria@example.com",  # Email já existe
                telefone="0987654321",
                endereco="Rua Outro, 456"
            )
            contato_duplicado.full_clean()  # Validação


class ExpProfissionalModelTest(TestCase):

    def setUp(self):
        self.dados_pessoais = DadosPessoais.objects.create(
            nome="Joao Pedro",
            data_nascimento=date(1987, 8, 23)
        )
        self.exp_profissional = ExpProfissional.objects.create(
            dados_pessoais=self.dados_pessoais,
            cargo="Desenvolvedor",
            empresa="Amazon",
            inicio=date(2020, 1, 1),
            termino=date(2021, 12, 31),
            descricao="Desenvolvimento de software."
        )

    def test_exp_profissional_creation(self):
        """Testa se um objeto ExpProfissional pode ser criado corretamente."""
        self.assertEqual(self.exp_profissional.cargo, "Desenvolvedor")
        self.assertEqual(self.exp_profissional.empresa, "Amazon")
        self.assertEqual(self.exp_profissional.inicio, date(2020, 1, 1))
        self.assertEqual(self.exp_profissional.termino, date(2021, 12, 31))

    def test_exp_profissional_str(self):
        """Testa o método __str__ de ExpProfissional."""
        self.assertEqual(str(self.exp_profissional), "Amazon")

    def test_validacao_inicio_termino(self):
        """Testa a validação para garantir que a data de início seja anterior à data de término."""
        exp_invalida = ExpProfissional(
            dados_pessoais=self.dados_pessoais,
            cargo="Desenvolvedor",
            empresa="Microsoft",
            inicio=date(2022, 1, 1),
            termino=date(2021, 1, 1),  # Início posterior ao término
            descricao="Desenvolvedor mobile"
        )
        with self.assertRaises(ValidationError):
            exp_invalida.full_clean()  # Força a validação


class ExpAcademicaModelTest(TestCase):

    def setUp(self):
        self.dados_pessoais = DadosPessoais.objects.create(
            nome="Lara Oliveira",
            data_nascimento=date(1993, 11, 30)
        )
        self.exp_academica = ExpAcademica.objects.create(
            dados_pessoais=self.dados_pessoais,
            instituicao="UTFPR",
            curso="Ciência da Computação",
            inicio=date(2015, 1, 1),
            termino=date(2019, 12, 31)
        )

    def test_exp_academica_creation(self):
        """Testa se um objeto ExpAcademica pode ser criado corretamente."""
        self.assertEqual(self.exp_academica.instituicao, "UTFPR")
        self.assertEqual(self.exp_academica.curso, "Ciência da Computação")

    def test_exp_academica_str(self):
        """Testa o método __str__ de ExpAcademica."""
        self.assertEqual(str(self.exp_academica), "UTFPR")

    def test_validacao_inicio_termino(self):
        """Testa a validação de datas de início e término em ExpAcademica."""
        exp_invalida = ExpAcademica(
            dados_pessoais=self.dados_pessoais,
            instituicao="UEL",
            curso="Engenharia Eletrica",
            inicio=date(2020, 1, 1),
            termino=date(2019, 1, 1)  # Início posterior ao término
        )
        with self.assertRaises(ValidationError):
            exp_invalida.full_clean()  # Validação forçada
