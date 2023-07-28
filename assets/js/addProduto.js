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
