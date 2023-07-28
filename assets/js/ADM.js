import { recebeAPI } from "./recebeAPI.js";
import { criarCard } from "./criaCard.js";

const botaoAlteraProduto = document.getElementById("botaoAlteraProduto");

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
      const confirmacao = confirm(
        "Deseja apagar o produto: " +
          localStorage.getItem(`card${cardSelecionado}`) +
          " ?"
      );
      if (confirmacao) {
        deletarProduto(cardSelecionado);
      }
    });

    const botaoAlterar = card.querySelector(".botao__alterar");
    const TelaListaTodosProdutos = document.getElementById("produtosEditaveis");
    const TelaAddProduto = document.getElementById("addProduto");
    const botaoTelaADM = document.getElementById("btnTelaADM");
    const botaoSectionAddProduto = document.getElementById(
      "botaoSectionAddProduto"
    );
    const botaoAddProduto = document.getElementById("botaoAddProduto");

    TelaAddProduto.style.display = "none";

    botaoTelaADM.addEventListener("click", () => {
      TelaAddProduto.style.display = "none";
      TelaListaTodosProdutos.style.display = "flex";
    });

    botaoSectionAddProduto.addEventListener("click", () => {
      botaoAlteraProduto.classList.add("display-none");
      botaoAddProduto.classList.remove("display-none");
      botaoAlteraProduto.classList.add("display-none");
      TelaAddProduto.style.display = "flex";
      TelaListaTodosProdutos.style.display = "none";
    });

    botaoAlterar.addEventListener("click", () => {
      botaoAddProduto.classList.add("display-none");
      botaoAlteraProduto.classList.remove("display-none");
      TelaAddProduto.style.display = "flex";
      TelaListaTodosProdutos.style.display = "none";
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
    console.log(
      "O item " + localStorage.getItem(`card${id}`) + " foi apagado com SUCESSO"
    );
    window.location.reload();
  } else {
    console.log(
      "Não foi possivel apagar o item " + localStorage.getItem(`card${id}`)
    );
  }
}
