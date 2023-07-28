import { recebeAPI } from "./recebeAPI.js";
import { criarCard } from "./criaCard.js";
import {
  enviarNovoProduto,
  deletarProduto,
  alteraProduto,
} from "./poderesAdm.js";

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

    const botaoAlteraProduto = document.getElementById("botaoAlteraProduto");

    botaoAlteraProduto.addEventListener("click", () => {
      const cardSelecionado = card.id;
      console.log(cardSelecionado);
      alteraProduto(cardSelecionado);
    });

    const botaoSectionAddProduto = document.getElementById(
      "botaoSectionAddProduto"
    );
    const TelaListaTodosProdutos = document.getElementById("produtosEditaveis");
    const TelaAddProduto = document.getElementById("addProduto");
    const botaoTelaADM = document.getElementById("btnTelaADM");
    const botaoAddProduto = document.getElementById("botaoAddProduto");
    const botaoAlterar = card.querySelector(".botao__alterar");

    TelaAddProduto.style.display = "none";

    botaoTelaADM.addEventListener("click", () => {
      TelaAddProduto.style.display = "none";
      TelaListaTodosProdutos.style.display = "flex";
    });

    botaoSectionAddProduto.addEventListener("click", () => {
      alert("funciona");
      botaoAlteraProduto.classList.add("display-none");
      botaoAddProduto.classList.remove("display-none");
      botaoAlteraProduto.classList.add("display-none");
      TelaAddProduto.style.display = "flex";
      TelaListaTodosProdutos.style.display = "none";
    });

    botaoAlterar.addEventListener("click", () => {
      TelaAddProduto.style.display = "flex";
      botaoAddProduto.classList.add("display-none");
      botaoAlteraProduto.classList.remove("display-none");
      TelaAddProduto.style.display = "flex";
      TelaListaTodosProdutos.style.display = "none";
    });
  });
}

exibeCardADM();
