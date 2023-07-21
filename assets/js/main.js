import { exibeCardADM } from "./ADM.js";
import { exibeCard } from "./exibeCard.js";

let botaoLogin = document.getElementById("btnLogin");

botaoLogin.addEventListener("click", () => {
  window.location.href = "/assets/html/login.html";
});

exibeCardADM();
exibeCard();
