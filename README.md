# Landing Page - BlueTech Solutions

[![Created](https://img.shields.io/badge/Data-29%2F01%2F2025-green)](https://www.timeanddate.com/date/)


## Descrição

A landing page foi constr
Esta é uma landing page para a empresa **BlueTech Solutions**, projetada para apresentar os serviços e benefícios da empresa. A página inclui uma navegação intuitiva, seção de benefícios, formulário de contato e design responsivo.

## Tecnologias Utilizadas

A landing page foi construída utilizando as seguintes tecnologias:

[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  

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

- Inicie o servidor Node.js
  ```
  npm start
  ```

- Abra a Landing Page (lp.html) 
  - Clique com o botão direito do mouse sobre o arquivo `lp.html` e clique na opção ```Open with Live Server```


  >Caso não apareça a opção "Open with Live Server", instale a extensão Live Server (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  
  
- Preencha o formulário de contato presente na landingPage

- Visualize os leads cadastrados:

  - Acesse no navegador: http://localhost:3000/leads

O sistema armazenará os leads (nome e e-mail) enviados pelo formulário.

## 🛠️ Criando o Banco de Dados MySQL

Primeiro, crie o banco de dados e a tabela para armazenar os leads:

📌 Comando SQL (Execute no MySQL)

```
CREATE DATABASE landingpage_db;

```


```
USE landingpage_db;
```

```
CREATE TABLE leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);
```

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

