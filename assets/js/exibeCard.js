import { recebeAPI } from "./recebeAPI.js";
import { criarCard } from "./criaCard.js";

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

    const botaoVerTudo = card.querySelector(".card__botao");
    botaoVerTudo.addEventListener("click", ()=> {
      const startScreen = document.getElementById("startScreen")
      startScreen.style.display="none"
      
    })

    async function recebeCardSelecionado (id){
      const response = await fetch(
        `https://64b8785621b9aa6eb079e1c0.mockapi.io/produtos/${id}`)
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



export { exibeCard };
