import { recebeAPI } from "./recebeAPI.js";
import { criarCardPesquisado } from "./criaCard.js";
import { recebeCardSelecionado, exclueCardAntigo} from "./exibeCard.js";

async function pesquisa() {
  const dadosApi = await recebeAPI();
  const pesquisaContainer = document.getElementById("pesquisaContainer");
  const inputPesquisa = document.getElementById("inputPesquisa");
  const listaProdutosPesquisa = document.getElementById("listaProdutosPesquisa");
  const resultadoContainer = document.getElementById("resultadoPesquisa");

  function removeAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  inputPesquisa.addEventListener("input", () => {
    const termoPesquisado = removeAcentos(
      inputPesquisa.value.trim().toLowerCase()
    );

    listaProdutosPesquisa.innerHTML = ""; 
    resultadoContainer.style.display = "none"; 

    if (termoPesquisado !== "") {
      const produtosCorrespondentes = dadosApi.filter((element) => {
        const elementValue = removeAcentos(element.name.toLowerCase());
        return elementValue.includes(termoPesquisado);
      });

      pesquisaContainer.style.borderRadius = "20px 20px 0 0";
      resultadoContainer.style.display = "flex";

      produtosCorrespondentes.forEach((element) => {
        const cardPesquisado = criarCardPesquisado(
          element.imagem,
          element.name,
          element.preco,
          element.id
        );

        listaProdutosPesquisa.appendChild(cardPesquisado);

    const botaoVerTudo = cardPesquisado.querySelector(".cardPesquisado__botao")

    botaoVerTudo.addEventListener("click", () => {
      const startScreen = document.getElementById("startScreen");
      const verProdutoContainer = document.getElementById(
        "verProdutoContainer"
      );
      const botaoLogin = document.getElementById("btnLogin");
      startScreen.style.display = "none";
      botaoLogin.style.display = "none";
      verProdutoContainer.style.display = "block";
      resultadoContainer.style.display="none"
      pesquisaContainer.style.borderRadius = "20px";
      exclueCardAntigo()
      recebeCardSelecionado(cardPesquisado.id);
      inputPesquisa.value = ""
    });

      });
    } else {
      pesquisaContainer.style.borderRadius = "20px";
    }
  });
}

export { pesquisa };
