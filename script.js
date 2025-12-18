const perguntas = [
  { pergunta: "Quanto é 5 + 3?", resposta: "8" },
  { pergunta: "Quanto é 10 - 4?", resposta: "6" },
  { pergunta: "Quanto é 6 × 2?", resposta: "12" }
];

let indice = 0;
let pontos = 0;

function carregarPergunta() {
  document.querySelector("p").innerText = perguntas[indice].pergunta;
  document.getElementById("resposta").value = "";
  document.getElementById("resultado").innerText = "";
}

function verificar() {
  const respostaUsuario = document.getElementById("resposta").value;

  if (respostaUsuario === perguntas[indice].resposta) {
    pontos++;
    document.getElementById("resultado").innerText = "✅ Correto!";
  } else {
    document.getElementById("resultado").innerText = "❌ Errado!";
  }

  indice++;

  setTimeout(() => {
    if (indice < perguntas.length) {
      carregarPergunta();
    } else {
      finalizar();
    }
  }, 1000);
}

function finalizar() {
  document.body.innerHTML = `
    <h1>Fim do Quiz 🎉</h1>
    <p>Sua pontuação: ${pontos} / ${perguntas.length}</p>
  `;
}

localStorage.setItem("pontuacao", pontos);

carregarPergunta();
