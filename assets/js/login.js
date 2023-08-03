import { pesquisa } from "./pesquisa.js";

const botaologar = document.getElementById("botaoLogar");
const inputEmail = document.getElementById("inputEmail");
const inputSenha = document.getElementById("inputSenha");

botaologar.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputEmail.value == "admin@email.com" && inputSenha.value == "admin") {
    window.location.href = "/assets/html/admin.html";
  } else {
    alert(
      " Para entrar na sessão de administrador \n Email: admin@email.com \n Senha: admin"
    );
  }
});

pesquisa();
