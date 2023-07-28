import { recebeAPI } from "./recebeAPI.js";
import { criarCard } from "./criaCard.js";

function alternaTela() {
  const TelaListaTodosProdutos = document.getElementById("produtosEditaveis");
  const TelaAddProduto = document.getElementById("addProduto");

  const botaoTelaADM = document.getElementById("btnTelaADM");

  const botaoAdicionarProduto = document.getElementById(
    "botao__adicionarProduto"
  );

  TelaAddProduto.style.display = "none";

  botaoTelaADM.addEventListener("click", () => {
    TelaAddProduto.style.display = "none";
    TelaListaTodosProdutos.style.display = "flex";
  });

  botaoAdicionarProduto.addEventListener("click", () => {
    TelaAddProduto.style.display = "flex";
    TelaListaTodosProdutos.style.display = "none";
  });
}

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

    console.log(listaTodosProdutos.card);

    const botaoDeletar = card.querySelector(".botao__deletar");
    botaoDeletar.addEventListener("click", () => {
      const cardSelecionado = card.id;
      deletarProduto(cardSelecionado);
    });
  });
}

exibeCardADM();
alternaTela();

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
