import { recebeAPI } from "./recebeAPI.js";
import { criarCard, criarCardSelecionado } from "./criaCard.js";

async function recebeCardSelecionado(id) {
  const response = await fetch(
    `https://64b8785621b9aa6eb079e1c0.mockapi.io/produtos/${id}`
  );
  const conexao = await response.json();
  console.log(conexao);

  const cardSelecionado = criarCardSelecionado(
    conexao.imagem,
    conexao.name,
    conexao.preco,
    conexao.descricao,
    conexao.id
  );
  localStorage.setItem("cardSelecionadoCategoria", conexao.categoria);
  console.log(localStorage.getItem("cardSelecionadoCategoria"));
  localStorage.setItem("cardSelecionadoId", conexao.id);
  console.log(localStorage.getItem("cardSelecionadoId"));
  const listaCardSelecionado = document.getElementById("listaCardSelecionado");
  listaCardSelecionado.appendChild(cardSelecionado);
}

async function exibeCard() {
  const dadosAPI = await recebeAPI();

  async function exibeCardSimilares() {
    const cardSelecionadoCategoria = localStorage.getItem(
      "cardSelecionadoCategoria"
    );
    const cardSelecionadoId = localStorage.getItem("cardSelecionadoId");
    console.log(cardSelecionadoId);

    for (const element of dadosAPI) {
      if (
        element.categoria === cardSelecionadoCategoria &&
        element.id !== cardSelecionadoId
      ) {
        const card = criarCard(
          element.imagem,
          element.name,
          element.preco,
          element.id
        );

        const listaCardSimilares =
          document.getElementById("listaCardSimilares");
        listaCardSimilares.appendChild(card);
      }
    }
  }

  const listaStarWars = document.getElementById("listaStarWars");
  const listaConsoles = document.getElementById("listaConsoles");
  const listaDiversos = document.getElementById("listaDiversos");

  for (const element of dadosAPI) {
    const card = criarCard(
      element.imagem,
      element.name,
      element.preco,
      element.id
    );

    switch (element.categoria) {
      case "Star Wars":
        listaStarWars.appendChild(card);
        break;
      case "Consoles":
        listaConsoles.appendChild(card);
        break;
      case "Diversos":
        listaDiversos.appendChild(card);
        break;
    }

    const botaoVerTudo = card.querySelector(".card__botao");
    botaoVerTudo.addEventListener("click", () => {
      recebeCardSelecionado(card.id);

      const startScreen = document.getElementById("startScreen");
      const botaoLogin = document.getElementById("btnLogin");
      startScreen.style.display = "none";
      botaoLogin.style.display = "none";

      exibeCardSimilares();
    });
  }
}

export { exibeCard };
