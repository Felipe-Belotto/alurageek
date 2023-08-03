import { recebeAPI } from "./recebeAPI.js";

async function pesquisa() {
  const dadosApi = await recebeAPI();
  const inputPesquisa = document.getElementById("inputPesquisa");
  const listaProdutosPesquisa = document.getElementById(
    "listaProdutosPesquisa"
  );

  const resultadoContainer = document.getElementById("resultadoPesquisa");

  function removeAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  inputPesquisa.addEventListener("input", () => {
    const produtosParecidos = [];
    const termoPesquisado = removeAcentos(
      inputPesquisa.value.trim().toLowerCase()
    );

    if (termoPesquisado !== "") {
      dadosApi.forEach((element) => {
        const elementValue = removeAcentos(element.name.toLowerCase());

        if (elementValue.includes(termoPesquisado)) {
          produtosParecidos.push(element);

          resultadoContainer.style.display = "block";

          listaProdutosPesquisa.innerHTML = element.name;
        }

        console.log(termoPesquisado);
      });
    } else {
      resultadoContainer.style.display = "none";
    }
  });
}

export { pesquisa };
