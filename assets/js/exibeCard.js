import { recebeAPI } from "./recebeAPI.js";
import { criarCard } from "./criaCard.js";

async function exibeCard() {
  const listaTodosProdutos = document.getElementById("listaTodosProdutos");
  const listaStarWars = document.getElementById("listaStarWars");
  const listaConsoles = document.getElementById("listaConsoles");
  const listaDiversos = document.getElementById("listaDiversos");

  // Obtém a lista de todos os produtos do localStorage
  const todosProdutos = JSON.parse(localStorage.getItem("todosProdutos"));

  todosProdutos.forEach((element) => {
    const card = criarCard(element.imagem, element.name, element.preco);

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

export { exibeCard };
