function criarCard(imagem, nome, preco, id) {
  const card = document.createElement("li");
  card.className = "produto__card";
  card.id = id;
  preco = parseFloat(preco);
  localStorage.setItem(`card${id}`, nome);
  card.innerHTML = `
    <div class="cardADM__botoes">
      <button class="botao__deletar"><img src="/assets/img/botaoDeletar.svg" alt="botao deletar"></button>
      <button class="botao__alterar"><img src="/assets/img/botaoModificar.svg" alt="botao alterar"></button>
    </div>
    <img class="card__imagem" src="${imagem}" alt="">
    <p class="card__nome">${nome}</p>
    <p class="card__preco-antigo"> <span>R$ ${preco.toFixed(2)}</span> 33% </p>
    <p class="card__preco"> R$ ${(preco - preco * 0.3).toFixed(2)}</p>
    <button class="card__botao">Ver produto</button>
  `;

  return card;
}

function criarCardSelecionado(imagem, nome, preco, descricao, id) {
  const cardSelecionado = document.createElement("li");
  cardSelecionado.className = "cardSelecionado";
  cardSelecionado.id = id;
  preco = parseFloat(preco.toFixed(2));
  const precoComDesconto = (preco - preco * 0.3).toFixed(2);
  cardSelecionado.innerHTML = `
    <img class="cardSelecionado__imagem" src="${imagem}" alt="">
    <div class="cardSelecionado__informacoes">
    <p class="cardSelecionado__nome">${nome}</p>
    <div class="cardSelecionado__precos">
    <p class="cardSelecionado__preco-antigo"> <span>R$ ${preco}</span> 33% </p>
    <p class="cardSelecionado__preco"> R$ ${precoComDesconto}</p>
    </div>
    <p class="cardSelecionado__descricao">${descricao}</p>
    </div>
  `;

  return cardSelecionado;
}

function criarCardPesquisado(imagem, nome, preco, id) {
  const cardPesquisado = document.createElement("li");
  cardPesquisado.className = "card__pesquisado";
  cardPesquisado.id = id;
  preco = parseFloat(preco);
  localStorage.setItem(`card${id}`, nome);
  cardPesquisado.innerHTML = `
    <img class="cardPesquisado__imagem" src="${imagem}" alt="">
    <p class="cardPesquisado__nome">${nome}</p>
    <p class="cardPesquisado__preco"> R$ ${(preco - preco * 0.3).toFixed(2)}</p>
    <button class="cardPesquisado__botao">Ver produto</button>
  `;

  return cardPesquisado;
}

export { criarCard, criarCardSelecionado, criarCardPesquisado };
