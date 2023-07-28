const botaoTelaADM = document.getElementById("btnTelaADM");

botaoTelaADM.addEventListener("click", () => {
  window.location.href = "./admin.html";
});

/* As divs que recebe os inputs e label */
const divUrl = document.getElementById("addUrl");
const divCategoria = document.getElementById("addCategoria");
const divNome = document.getElementById("addNome");
const divPreco = document.getElementById("addPreco");

/* Inputs */
const inputUrl = document.getElementById("produtoUrl");
const inputCategoria = document.getElementById("produtoCategoria");
const inputNome = document.getElementById("produtoNome");
const inputPreco = document.getElementById("produtoPreco");
const inputDescricao = document.getElementById("addDescricao");

divUrl.addEventListener("click", () => {
  inputUrl.focus();
});

divCategoria.addEventListener("click", () => {
  inputCategoria.focus();
});

divNome.addEventListener("click", () => {
  inputNome.focus();
});

divPreco.addEventListener("click", () => {
  inputPreco.focus();
});

async function enviarNovoProduto() {
  fetch("https://64b8785621b9aa6eb079e1c0.mockapi.io/produtos", {
    method: "POST",
    body: JSON.stringify({
      name: inputNome.value,
      imagem: inputUrl.value,
      preco: inputPreco.value,
      descricao: inputDescricao.value,
      categoria: inputCategoria.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

const botaoSubmit = document.getElementById("botaoAddProduto");

botaoSubmit.addEventListener("click", enviarNovoProduto);
