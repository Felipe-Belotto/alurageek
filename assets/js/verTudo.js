function verTudoListas() {
  function ativarDesativarLista(botao, lista) {
    const verTudoAtivo = lista.style.height === "100%";

    if (verTudoAtivo) {
      botao.innerHTML = `Ver mais <img src="assets/img/seta.svg" alt="icone ver tudo">`;
      botao.classList.remove('botao-ativo'); // Remova a classe de botão ativo

      if (window.innerWidth < 550) {
        lista.style.height = "550px";
        console.log("tela de celular");
      }

      if (window.innerWidth > 550) {
        lista.style.flexWrap = "nowrap";
        lista.style.height = "auto";
        console.log("tela de computador");
      }
    } else {
      lista.style.flexWrap = "wrap";
      lista.style.height = "100%";
      botao.innerHTML = `Ver menos <img src="assets/img/seta.svg" class="invertido" alt="icone ver tudo">`;
      botao.classList.add('botao-ativo'); 
    }
  }

  const botaoVtStarWars = document.getElementById("btnVerTudoStarWars");
  const listaStarWars = document.getElementById("listaStarWars");

  const botaoVtConsoles = document.getElementById("btnVerTudoConsoles");
  const listaConsoles = document.getElementById("listaConsoles");

  const botaoVtDiversos = document.getElementById("btnVerTudoDiversos");
  const listaDiversos = document.getElementById("listaDiversos");

  botaoVtStarWars.addEventListener("click", () => {
    ativarDesativarLista(botaoVtStarWars, listaStarWars);
  });

  botaoVtConsoles.addEventListener("click", () => {
    ativarDesativarLista(botaoVtConsoles, listaConsoles);
  });

  botaoVtDiversos.addEventListener("click", () => {
    ativarDesativarLista(botaoVtDiversos, listaDiversos);
  });
}

export { verTudoListas };
