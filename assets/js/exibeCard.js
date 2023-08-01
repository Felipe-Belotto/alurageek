import { recebeAPI } from "./recebeAPI.js";
import { criarCard, criarCardSelecionado } from "./criaCard.js";

async function exibeCard() {
  const dadosAPI = await recebeAPI();

  const listaStarWars = document.getElementById("listaStarWars");
  const listaConsoles = document.getElementById("listaConsoles");
  const listaDiversos = document.getElementById("listaDiversos");

  dadosAPI.forEach((element) => {
    const card = criarCard(
      element.imagem,
      element.name,
      element.preco,
      element.id
    );

    function alteraTelaCardSelecionado() {
      recebeCardSelecionado(card.id);
      const startScreen = document.getElementById("startScreen");
      startScreen.style.display = "none";

      exibeCardSimilares();
    }

    const botaoVerTudo = card.querySelector(".card__botao");
    botaoVerTudo.addEventListener("click", () => {
      alteraTelaCardSelecionado();
    });

    function exibeCardSimilares() {
      if (
        element.categoria == localStorage.getItem("cardSelecionadoCategoria")
      ) {
        dadosAPI.forEach((element) => {
          if (
            element.categoria ==
            localStorage.getItem("cardSelecionadoCategoria")
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
            console.log(card);
          }
        });
      }
    }

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
  });
}

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
  localStorage.setItem("cardSelecionadoCategoria", conexao.id);
  const listaCardSelecionado = document.getElementById("listaCardSelecionado");
  listaCardSelecionado.appendChild(cardSelecionado);
}

export { exibeCard };
