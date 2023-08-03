import { recebeAPI } from "./recebeAPI.js";
import { criarCardPesquisado } from "./criaCard.js";

async function pesquisa() {
  const dadosApi = await recebeAPI();
  const pesquisaContainer = document.getElementById("pesquisaContainer");
  const inputPesquisa = document.getElementById("inputPesquisa");
  const listaProdutosPesquisa = document.getElementById(
    "listaProdutosPesquisa"
  );

  const resultadoContainer = document.getElementById("resultadoPesquisa");

  function removeAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  inputPesquisa.addEventListener("input", () => {
    const termoPesquisado = removeAcentos(
      inputPesquisa.value.trim().toLowerCase()
    );

    if (termoPesquisado !== "") {
      dadosApi.forEach((element) => {
        const elementValue = removeAcentos(element.name.toLowerCase());

        if (elementValue.includes(termoPesquisado)) {
          const cardPesquisado = criarCardPesquisado(
            element.imagem,
            element.name,
            element.preco,
            element.id
          );

          pesquisaContainer.style.borderRadius = "20px 20px 0 0";
          resultadoContainer.style.display = "flex";

          listaProdutosPesquisa.appendChild(cardPesquisado);
        }
      });
    } else {
      pesquisaContainer.style.borderRadius = "20px 20px 0 0";
      resultadoContainer.style.display = "none";
    }
  });
}

export { pesquisa };
