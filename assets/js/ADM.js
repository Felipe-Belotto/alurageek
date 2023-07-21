import { recebeAPI } from "./recebeAPI.js";
import { criarCard } from "./criaCard.js";

async function exibeCardADM() {
  const dadosAPI = await recebeAPI();
  const listaTodosProdutos = document.getElementById("listaTodosProdutos");

  dadosAPI.forEach((element, index) => {
    const card = criarCard(element.imagem, element.name, element.preco);

    // atribui um id para cada card criado
    card.setAttribute("data-id", index);

    listaTodosProdutos.appendChild(card);
    const botaoDeletar = card.querySelector(".botao__deletar");
    botaoDeletar.addEventListener("click", () => {
      // Reconhece qual o id do botão que foi clicado
      const cardIndex = botaoDeletar.parentElement.getAttribute("data-id");
      card.remove();
      // corta o ID que o botão foi clicado
      dadosAPI.splice(cardIndex, 1);
      // Atualiza a lista de produtos no localStorage
      localStorage.setItem("todosProdutos", JSON.stringify(dadosAPI));
    });
  });

  // Salva a lista de todos os produtos no localStorage
  localStorage.setItem("todosProdutos", JSON.stringify(dadosAPI));
}

exibeCardADM();
