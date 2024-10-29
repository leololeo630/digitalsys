# digitalsys
Sistema de recrutamento e envio de currículos para a empresa Pegho
#Funcionalidades
- Interface de Login
- Envio de formulario com as informações do candidato
- API REST para requisiçoes backend com uso do DJANGO REST FRAMEWORK
- Interface de administração com Django Admin
# Requisitos
Necessário ter o Docker instalado
# Execução e Instalação
- Realize o download do repositório
- Construa a imagem do app
- - docker-compose up --build
- Aguarde até a imagem ser construida e o frontend e backend serem iniciados
# Instruções de Uso
## Frontend
- Acesse a interface de login através de http://localhost:3000
- O usuario e senha de login já cadastrados são
- - Usuario: usuario
  - Senha: senhauser
## Backend
- Acesse a interface de administração através de http://localhost:8000/admin
- As credenciais já cadastradas para o Django Admin são
- - Usuario: admin
  - Senha: admin
- Acesse a api através de  http://localhost:8000/
