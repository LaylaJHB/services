/*
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",      // Substitua pelo seu usuário do MySQL
    password: "",      // Substitua pela sua senha do MySQL
    database: "landingpage_db"
});

// Conectar ao banco de dados
db.connect(err => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err);
    } else {
        console.log("Conectado ao banco de dados MySQL");
    }
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota para receber os leads do formulário
app.post("/cadastro", (req, res) => {
    const { nome, email } = req.body;
    
    if (!nome || !email) {
        return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    const query = "INSERT INTO leads (nome, email) VALUES (?, ?)";
    db.query(query, [nome, email], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao salvar no banco de dados!" });
        }
        res.status(201).json({ message: "Lead cadastrado com sucesso!" });
    });
});


// Rota para listar os leads cadastrados
app.get("/leads", (req, res) => {
    res.json(leads);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
*/


/* CONFIG PARA MOCK */

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock do banco de dados (array em memória)
let leads = [];

// Rota para receber os leads do formulário
app.post("/cadastro", (req, res) => {
    const { nome, email } = req.body;
    
    if (!nome || !email) {
        return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    // Simulando salvamento no banco
    leads.push({ id: leads.length + 1, nome, email });
    
    res.status(201).json({ message: "Lead cadastrado com sucesso!", leads });
});

// Rota para listar os leads cadastrados (para testes)
app.get("/leads", (req, res) => {
    res.json(leads);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor mock rodando em http://localhost:${PORT}`);
});
