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
