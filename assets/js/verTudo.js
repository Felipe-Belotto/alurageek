function verTudoListas() {
  const botaoVtStarWars = document.getElementById("btnVerTudoStarWars");
  const listaStarWars = document.getElementById("listaStarWars");

  const botaoVtConsoles = document.getElementById("btnVerTudoConsoles");
  const listaConsoles = document.getElementById("listaConsoles");

  const botaoVtDiversos = document.getElementById("btnVerTudoDiversos");
  const listaDiversos = document.getElementById("listaDiversos");

  botaoVtStarWars.addEventListener("click", () => {
    const verTudoAtivo = listaStarWars.style.height === "100%";

    if (verTudoAtivo) {
    
      botaoVtStarWars.innerHTML = `Ver mais <img src="assets/img/seta.svg" alt="icone ver tudo">`;
      
      if(window.innerWidth < 550){
        listaStarWars.style.height="550px"
        console.log("tela de celular")
      }
      
      if(window.innerWidth > 550){
        listaStarWars.style.height="auto"
        console.log("tela de computador")
      }
      
    } else {
      listaStarWars.style.height = "100%";
      botaoVtStarWars.innerHTML = `Ver menos <img src="assets/img/seta.svg" alt="icone ver tudo">`;
    }
  });

  botaoVtConsoles.addEventListener("click", () => {
    const verTudoAtivo = listaConsoles.style.height === "100%";

    if (verTudoAtivo) {
      
      botaoVtConsoles.innerHTML = `Ver mais <img src="assets/img/seta.svg" alt="icone ver tudo">`;
      
      if(window.innerWidth < 550){
        listaConsoles.style.height="550px"
        console.log("tela de celular")
      }
      
      if(window.innerWidth > 550){
        listaConsoles.style.height="auto"
        console.log("tela de computador")
      }
      
    } else {
      listaConsoles.style.height = "100%";
      botaoVtConsoles.innerHTML = `Ver menos <img src="assets/img/seta.svg" alt="icone ver tudo">`;
    }
  });

  botaoVtDiversos.addEventListener("click", () => {
    const verTudoAtivo = listaDiversos.style.height === "100%";

    if (verTudoAtivo) {
      
      botaoVtDiversos.innerHTML = `Ver mais <img src="assets/img/seta.svg" alt="icone ver tudo">`;
      
      if(window.innerWidth < 550){
        listaDiversos.style.height="550px"
        console.log("tela de celular")
      }
      
      if(window.innerWidth > 550){
        listaDiversos.style.height="auto"
        console.log("tela de computador")
      }
      
    } else {
      listaDiversos.style.height = "100%";
      botaoVtDiversos.innerHTML = `Ver menos <img src="assets/img/seta.svg" alt="icone ver tudo">`;
    }
  });







}

export { verTudoListas };
