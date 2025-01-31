// Contato

document.getElementById("leadForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg");

  fetch("http://localhost:3000/cadastro", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome, email })
  })
  .then(response => response.json())
  .then(data => {
      msg.textContent = data.message || data.error;
      msg.style.color = data.error ? "red" : "green";
      if (!data.error) document.getElementById("leadForm").reset();
  })
  .catch(error => {
      msg.textContent = "Erro ao conectar ao servidor.";
      msg.style.color = "red";
  });
});


// Agendamento

document.getElementById("formAgendamento").addEventListener("submit", function(event) {
    event.preventDefault();

    let servico = document.getElementById("servico").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    let preco = document.getElementById("preco").value;

    fetch("http://localhost:3000/pagar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ servico, data, hora, preco })
    })
    .then(response => response.json())
    .then(data => {
        if (data.url) {
            window.location.href = data.url;
        } else {
            alert("Erro ao processar pagamento!");
        }
    });
});

function carregarAgendamentos() {
    fetch("http://localhost:3000/agendamentos")
    .then(response => response.json())
    .then(agendamentos => {
        let lista = document.getElementById("listaAgendamentos");
        lista.innerHTML = "";
        agendamentos.forEach((a) => {
            let status = a.pago ? "✅ Pago" : "❌ Pendente";
            lista.innerHTML += `<li>${a.servico} - ${a.data} às ${a.hora} - ${status}</li>`;
        });
    });
}
carregarAgendamentos();
