import { recebeAPI } from "./recebeAPI.js";
import { criarCard } from "./criaCard.js";

async function exibeCardADM() {
  const dadosAPI = await recebeAPI();
  const listaTodosProdutos = document.getElementById("listaTodosProdutos");

  dadosAPI.forEach((element) => {
    const card = criarCard(element.imagem, element.name, element.preco);
    listaTodosProdutos.appendChild(card);

    const botaoDeletar = card.querySelector(".botao__deletar");

    botaoDeletar.addEventListener("click", () => {
      const cardIndex = dadosAPI.indexOf(element);
      if (cardIndex !== -1) {
        dadosAPI.splice(cardIndex, 1);

        localStorage.setItem("todosProdutos", JSON.stringify(dadosAPI));

        card.remove();
      }
    });
  });

  localStorage.setItem("todosProdutos", JSON.stringify(dadosAPI));
}

exibeCardADM();

export { exibeCardADM };
