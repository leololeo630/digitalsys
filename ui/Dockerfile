# Use a imagem oficial do Node como base
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie o arquivo de dependências e instale as dependências
COPY package*.json ./
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta que o React usa (geralmente 3000)
EXPOSE 3000

# Comando para iniciar a aplicação React
CMD ["npm", "start"]
