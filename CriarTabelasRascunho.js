
/*
Aqui está um exemplo de integração da Landing Page com um banco de dados MySQL usando Node.js e JavaScript. O sistema armazenará os leads (nome e e-mail) enviados pelo formulário no banco de dados.

🛠️ 1. Criando o Banco de Dados MySQL
Primeiro, crie o banco de dados e a tabela para armazenar os leads:

📌 Comando SQL (Execute no MySQL)
sql
Copiar
Editar
CREATE DATABASE landingpage_db;

USE landingpage_db;

CREATE TABLE leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);
*/