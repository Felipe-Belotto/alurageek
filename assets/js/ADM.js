import { recebeAPI } from "./recebeAPI.js";
import { criarCard } from "./criaCard.js";

const botaoAdicionarProduto = document.getElementById(
  "botao__adicionarProduto"
);

botaoAdicionarProduto.addEventListener("click", () => {
  window.location.href = "./adicionarProduto.html";
});

async function exibeCardADM() {
  const dadosAPI = await recebeAPI();
  const listaTodosProdutos = document.getElementById("listaTodosProdutos");

  dadosAPI.forEach((element) => {
    const card = criarCard(
      element.imagem,
      element.name,
      element.preco,
      element.id
    );
    listaTodosProdutos.appendChild(card);

    const botaoDeletar = card.querySelector(".botao__deletar");
    botaoDeletar.addEventListener("click", () => {
      const cardSelecionado = card.id;
      deletarProduto(cardSelecionado);
    });
  });
}

exibeCardADM();

export { exibeCardADM };

async function deletarProduto(id) {
  const response = await fetch(
    `https://64b8785621b9aa6eb079e1c0.mockapi.io/produtos/${id}`,
    {
      method: "DELETE",
    }
  );

  if (response.status === 200) {
    console.log("Requisição bem-sucedida");
    window.location.reload();
  } else {
    console.log("Requisição falhou");
  }
}
