import { recebeAPI } from "./recebeAPI.js";
import { criarCard } from "./criaCard.js";
import {
  enviarNovoProduto,
  deletarProduto,
  alteraProduto,mostraProduto
} from "./poderesAdm.js";

async function exibeCardADM() {
  const dadosAPI = await recebeAPI();
  const listaTodosProdutos = document.getElementById("listaTodosProdutos");

  dadosAPI.forEach((element) => {
    const card = criarCard(
      element.imagem,
      element.name,
      element.preco,
      element.id,
    );

    listaTodosProdutos.appendChild(card);

    if (listaTodosProdutos.children.length <= 6) {
      listaTodosProdutos.style.justifyContent = "start";
    } else {
      listaTodosProdutos.style.justifyContent = "space-between";
    }    

    const botaoDeletar = card.querySelector(".botao__deletar");

    botaoDeletar.addEventListener("click", () => {
      const cardSelecionado = card.id;
      const confirmacao = confirm(
        "Deseja apagar o produto: " +
          localStorage.getItem(`card${cardSelecionado}`) +
          " ?"
      );
      if (confirmacao) {
        deletarProduto(card.id);
      }
    });


    /* ARRUMAR FUNÇAO */

  const botaoAlterar = card.querySelector(".botao__alterar"); 
  const botaoAlteraProduto = document.getElementById("botaoAlteraProduto");
  botaoAlterar.addEventListener("click", () => {
  TelaAddProduto.style.display = "flex";
  botaoAddProduto.classList.add("display-none");
  botaoAlteraProduto.classList.remove("display-none");
  TelaAddProduto.style.display = "flex";
  botaoTelaADM.classList.remove("display-none")
  TelaListaTodosProdutos.style.display = "none";
  mostraProduto(card.id)
 

    botaoAlteraProduto.addEventListener("click", () => {
      console.log(card.id)
      alteraProduto(card.id)
    });
}); 
  });
}

const botaoSectionAddProduto = document.getElementById(
  "botaoSectionAddProduto"
);
const TelaListaTodosProdutos = document.getElementById("produtosEditaveis");
const TelaAddProduto = document.getElementById("addProduto");
const botaoTelaADM = document.getElementById("btnTelaADM");
const botaoAddProduto = document.getElementById("botaoAddProduto");

const botaoAlteraProduto = document.getElementById("botaoAlteraProduto");

TelaAddProduto.style.display = "none";

botaoTelaADM.addEventListener("click", () => {
  botaoTelaADM.classList.add("display-none")
  TelaAddProduto.style.display = "none";
  location.reload();
  TelaListaTodosProdutos.style.display = "flex";
});

  botaoSectionAddProduto.addEventListener("click", () => {
  botaoTelaADM.classList.remove("display-none")
  botaoAlteraProduto.classList.add("display-none");
  botaoAddProduto.classList.remove("display-none");
  botaoAlteraProduto.classList.add("display-none");
  TelaAddProduto.style.display = "flex";
  TelaListaTodosProdutos.style.display = "none";
});

botaoAddProduto.addEventListener("click",()=>{
  alert("Produto adicionado")
  enviarNovoProduto()
})




exibeCardADM();
