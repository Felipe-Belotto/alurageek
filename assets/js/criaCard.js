function criarCard(imagem, nome, preco) {
  const card = document.createElement("li");
  card.className = "produto__card";
  card.innerHTML = `
    <div class="cardADM__botoes">
      <button class="botao__deletar"><img src="/assets/img/botaoDeletar.svg" alt="botao deletar"></button>
      <button class="botao__modificar"><img src="/assets/img/botaoModificar.svg" alt="botao modificar"></button>
    </div>
    <img class="card__imagem" src="${imagem}" alt="">
    <p class="card__nome">${nome}</p>
    <p class="card__preco"> R$ ${preco}</p>
    <button class="card__botao">Ver produto</button>
  `;

  return card;
}

export { criarCard };
