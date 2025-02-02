function carregarAgendamentos() {
  fetch("http://localhost:3000/agendamentos")
  .then(response => response.json())
  .then(agendamentos => {
      let tabela = document.getElementById("listaAgendamentos");
      tabela.innerHTML = ""; // Limpar antes de carregar novos dados

      if (agendamentos.length === 0) {
          tabela.innerHTML = "<tr><td colspan='5'>Nenhum agendamento encontrado.</td></tr>";
      } else {
          agendamentos.forEach(agendamento => {
              let preco = parseFloat(agendamento.preco) || 0; // Garante que preco seja número
              let status = agendamento.pago ? "✅ Pago" : "❌ Pendente";

              tabela.innerHTML += `
                  <tr>
                      <td>${agendamento.servico}</td>
                      <td>${agendamento.data}</td>
                      <td>${agendamento.hora}</td>
                      <td>R$ ${preco.toFixed(2)}</td>
                      <td>${status}</td>
                  </tr>
              `;
          });
      }
  })
  .catch(error => {
      console.error("Erro ao carregar agendamentos:", error);
      document.getElementById("listaAgendamentos").innerHTML = "<tr><td colspan='5'>Erro ao carregar dados.</td></tr>";
  });
}
