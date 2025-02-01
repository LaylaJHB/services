# Landing Page - BlueTech Solutions

[![Created](https://img.shields.io/badge/Data-29%2F01%2F2025-green)](https://www.timeanddate.com/date/)


## Descrição

Esta é uma landing page para a empresa **BlueTech Solutions**, projetada para apresentar os serviços e benefícios da empresa. A página inclui uma navegação intuitiva, seção de benefícios, formulário de contato e design responsivo.

Acesse aqui -> https://services-tawny.vercel.app/

## Tecnologias Utilizadas

A landing page foi construída utilizando as seguintes tecnologias:


🌐 Frontend (Interface do Usuário)
-
✅ HTML5 → Estrutura da página <br>
✅ CSS3 → Estilização e responsividade <br>
✅ JavaScript (ES6) → Interatividade e conexão com o backend <br>
✅ Fetch API → Comunicação com o backend 

🖥️ Backend (Servidor e API)
-
✅ Node.js → Plataforma para executar JavaScript no servidor<br>
✅ Express.js → Framework para criar APIs REST<br>
✅ Body-Parser → Middleware para processar JSON no backend<br>
✅ CORS → Permite comunicação entre frontend e backend

💾 Banco de Dados
-
✅ MySQL → Armazena leads e agendamentos<br>
✅ MySQL2 (Driver Node.js) → Conexão do Node.js com MySQL

💳 Pagamentos
-
✅ Stripe API → Processamento de pagamentos online

⚙️ Ferramentas e Desenvolvimento
-
✅ Postman → Teste de APIs<br>
✅ Git & GitHub → Controle de versão e hospedagem do código<br>
✅ Dotenv → Gerenciamento de variáveis de ambiente (.env)

![Preview da Landing Page](assets/landing-page-preview.png)


## Estrutura do Projeto

- **Cabeçalho**: Um menu de navegação com links para as seções "Sobre", "Benefícios" e "Contato".
- **Seção Hero**: Apresentação de uma mensagem chamativa sobre as soluções oferecidas pela BlueTech Solutions.
- **Benefícios**: Uma seção destacando três principais benefícios dos serviços da empresa:
    - 🚀 Rápido e Eficiente
    - 🔒 Seguro
    - 📞 Suporte 24/7
- **Formulário de Contato**: Permite que os visitantes enviem seu nome e email para entrar em contato.
- **Rodapé**: Um rodapé com a marca registrada da BlueTech Solutions.

   <br><br>

# 🖥️ Testando a Aplicação

É possível usar dados mockados para teste ou fazer uso do banco de dados MySQL. 



### 📌 Passos para Testar com Dados Mockados

- Clone esse repositório. Acesse o terminal do VsCode digite o comando:

  ```
  git clone https://github.com/LaylaJHB/services.git
  ```
  
- Instale as dependências
  ```
  npm install
  ```
- Inicie o servidor Node.js
  ```
  npm start
  ```

- Abra a Landing Page (lp.html) 
  - Clique com o botão direito do mouse sobre o arquivo `landingPage.html` e clique na opção ```Open with Live Server```

<br>
    
  - >✨ Caso não apareça a opção "Open with Live Server", instale a extensão Live Server (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  <br>

  
  <br>

- Preencha o formulário de contato presente na landingPage

- Visualize os leads cadastrados:

  
  > - Acesse no navegador: http://localhost:3000/leads

<br>
O sistema armazenará os leads (nome e e-mail) enviados pelo formulário.
<br><br>



## 🛠️ Criando o Banco de Dados MySQL

- Acesse o MySQL
- Acesse sua conexão, por exemplo: "MySQL Connections"
- crie o banco de dados e a tabela para armazenar os leads:
  
<br>

 Ⓜ️ Comando SQL (Execute no MySQL)

1. Crie o banco de dados

```
    CREATE DATABASE landingpage_db;
```
<br>  

2. Acesse o banco de dados criado

```
    USE landingpage_db;
```
<br>

3. Crie a tabela para receber os leads
```
    CREATE TABLE leads (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE
    );
```
<br>

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

