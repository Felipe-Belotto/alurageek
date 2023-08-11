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
    <p class="card__preco-antigo"><span>De R$ ${preco.toFixed(2)}</span></p>
    <p class="card__preco">Por R$ ${(preco - preco * 0.3).toFixed(2)}</p>
    <button class="card__botao">Ver produto</button>
  `;

  return card;
}

function criarCardSelecionado(imagem, nome, preco, descricao, id) {
  const cardSelecionado = document.createElement("li");
  cardSelecionado.className = "cardSelecionado";
  cardSelecionado.id = id;
  localStorage.setItem("nomeDoProduto", nome);
  preco = parseFloat(preco);
  const precoComDesconto = (preco - preco * 0.3).toFixed(2);
  cardSelecionado.innerHTML = `
    <div class="cardSelecionado__imagem__container">
    <img class="cardSelecionado__imagem" src="${imagem}" alt="${nome} imagem">
    </div>
    <div class="cardSelecionado__informacoes">
    <p class="cardSelecionado__nome">${nome}</p>
    <div class="cardSelecionado__precos">
    <p class="cardSelecionado__preco-antigo"><span>De R$ ${preco}</span></p>
    <p class="cardSelecionado__preco">Por R$ ${precoComDesconto}</p>
    </div>
    <p class="cardSelecionado__descricao">${descricao}</p>
    <button class="cardSelecionado__botao">Comprar</button>
    </div>

   
  `;

  const botaoComprar = cardSelecionado.querySelector(".cardSelecionado__botao");

  botaoComprar.addEventListener("click", Comprar);

  return cardSelecionado;
}

const Comprar = () => {
  alert(
    `Efetuando compra do produto ${localStorage.getItem(
      "nomeDoProduto"
    )} ... \n \n ( brincadeira, o site é apenas uma demonstração de habilidade )`
  );
};

function criarCardPesquisado(imagem, nome, preco, id) {
  const cardPesquisado = document.createElement("li");
  cardPesquisado.className = "card__pesquisado";
  cardPesquisado.id = id;
  preco = parseFloat(preco);
  localStorage.setItem(`card${id}`, nome);
  cardPesquisado.innerHTML = `
    <img class="cardPesquisado__imagem" src="${imagem}" alt="">
    <p class="cardPesquisado__nome">${nome}</p>
    <p class="cardPesquisado__preco">R$ ${(preco - preco * 0.3).toFixed(2)}</p>
    <button class="cardPesquisado__botao">Ver produto</button>
  `;

  return cardPesquisado;
}

export { criarCard, criarCardSelecionado, criarCardPesquisado };
