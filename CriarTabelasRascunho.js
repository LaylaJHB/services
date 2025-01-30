
/*
O sistema armazenará os leads (nome e e-mail) enviados pelo formulário no banco de dados.

🛠️ 1. Criando o Banco de Dados MySQL
Primeiro, crie o banco de dados e a tabela para armazenar os leads:

📌 Comando SQL (Execute no MySQL)

CREATE DATABASE landingpage_db;

USE landingpage_db;

CREATE TABLE leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);
*/