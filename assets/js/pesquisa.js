import { recebeAPI } from "./recebeAPI.js";

async function pesquisa() {
  const dadosApi = await recebeAPI();
  const inputPesquisa = document.getElementById("inputPesquisa");

  const produtosParecidos = [];

  inputPesquisa.addEventListener("change", () => {
    if (inputPesquisa.value !== "") {
      dadosApi.forEach((element) => {
        const elementValue = element.name.toLowerCase();

        if (elementValue.includes(inputPesquisa.value)) {
          produtosParecidos.push(element);
        }
      });
      console.log(produtosParecidos);
    }
  });
}

export { pesquisa };
