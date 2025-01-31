require('dotenv').config(); // Carrega as variáveis de ambiente primeiro

const express = require("express"); // Certifique-se de importar primeiro
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express(); // Criando a instância do Express

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexão com MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect(err => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err);
    } else {
        console.log("Conectado ao banco de dados MySQL");
    }
});

// 📩 Rota para receber os leads do formulário
app.post("/cadastro", (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    // Se MySQL estiver ativo, salvar no banco
    const query = "INSERT INTO leads (nome, email) VALUES (?, ?)";
    db.query(query, [nome, email], (err) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao salvar no banco de dados!" });
        }
        res.status(201).json({ message: "Lead cadastrado com sucesso!" });
    });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


// 📋 Rota para listar os leads cadastrados
app.get("/leads", (req, res) => {
    db.query("SELECT * FROM leads", (err, results) => {
        if (err) return res.status(500).json({ error: "Erro ao buscar leads" });
        res.json(results);
    });
});

// 🗓️ Rota para agendar um serviço com pagamento
app.post("/pagar", async (req, res) => {
    const { servico, data, hora, preco } = req.body;

    if (!servico || !data || !hora || !preco) {
        return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{
                price_data: {
                    currency: "brl",
                    product_data: { name: servico },
                    unit_amount: preco * 100
                },
                quantity: 1
            }],
            mode: "payment",
            success_url: "http://localhost:3000/sucesso",
            cancel_url: "http://localhost:3000/cancelado"
        });

        // Salvar agendamento no banco (ainda não pago)
        db.query(
            "INSERT INTO agendamentos (servico, data, hora, preco, pago) VALUES (?, ?, ?, ?, ?)",
            [servico, data, hora, preco, false],
            (err) => {
                if (err) return res.status(500).json({ error: "Erro ao agendar" });
                res.json({ url: session.url });
            }
        );
    } catch (error) {
        res.status(500).json({ error: "Erro ao processar pagamento" });
    }
});

// 📋 Rota para listar os agendamentos
app.get("/agendamentos", (req, res) => {
    db.query("SELECT * FROM agendamentos", (err, results) => {
        if (err) return res.status(500).json({ error: "Erro ao buscar agendamentos" });
        res.json(results);
    });
});

/*

// 🎉 Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


*/


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
/*
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
*/