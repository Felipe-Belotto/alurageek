import { recebeAPI } from "./recebeAPI.js";

function criarCard(imagem, nome, preco) {
  const card = document.createElement("li");
  card.className = "produto__card";
  card.innerHTML = `
    <img class="card__imagem" src="${imagem}" alt="">
    <p class="card__nome">${nome}</p>
    <p class="card__preco"> R$ ${preco}</p>
    <button class="card__botao">Ver produto</button>
  `;

  return card;
}

async function exibeCard() {
  const dadosAPI = await recebeAPI();
  const listaStarWars = document.getElementById("listaStarWars");
  const listaConsoles = document.getElementById("listaConsoles");
  const listaDiversos = document.getElementById("listaDiversos");

  dadosAPI.forEach((element) => {
    if (element.categoria == "Star Wars") {
      const card = criarCard(element.imagem, element.name, element.preco);
      listaStarWars.appendChild(card);
    }
    if (element.categoria == "Consoles") {
      const card = criarCard(element.imagem, element.name, element.preco);
      listaConsoles.appendChild(card);
    }
    if (element.categoria == "Diversos") {
      const card = criarCard(element.imagem, element.name, element.preco);
      listaDiversos.appendChild(card);
    }
  });
}

export { exibeCard };
