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

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
