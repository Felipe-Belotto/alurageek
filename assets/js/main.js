import { exibeCard } from "./exibeCard.js";

let botaoLogin = document.getElementById("btnLogin");

botaoLogin.addEventListener("click", () => {
  window.location.href = "/assets/html/login.html";
});

const mesPromocao = document.getElementById("mesPromocao");

const dataAtual = new Date();
const mesAtual = new Date().getMonth() + 1;

switch (mesAtual) {
  case 1:
    mesPromocao.innerText = "Janeiro Promocional";
    break;
  case 2:
    mesPromocao.innerText = "Fevereiro Promocional";
    break;
  case 3:
    mesPromocao.innerText = "Março Promocional";
    break;
  case 4:
    mesPromocao.innerText = "Abril Promocional";
    break;
  case 5:
    mesPromocao.innerText = "Maio Promocional";
    break;
  case 6:
    mesPromocao.innerText = "Junho Promocional";
    break;
  case 7:
    mesPromocao.innerText = "Julho Promocional";
    break;
  case 8:
    mesPromocao.innerText = "Agosto Promocional";
    break;
  case 9:
    mesPromocao.innerText = "Setembro Promocional";
    break;
  case 10:
    mesPromocao.innerText = "Outubro Promocional";
    break;
  case 11:
    mesPromocao.innerText = "Novembro Promocional";
    break;
  case 12:
    mesPromocao.innerText = "Dezembro Promocional";
    break;
  default:
    mesPromocao.innerText = "Mês inválido";
}

const verProdutoContainer = document.getElementById("verProdutoContainer");

verProdutoContainer.style.display = "none";

exibeCard();
