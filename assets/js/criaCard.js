function criarCard(imagem, nome, preco, id) {
  const card = document.createElement("li");
  card.className = "produto__card";
  card.id = id;
  localStorage.setItem(`card${id}`, nome);
  card.innerHTML = `
    <div class="cardADM__botoes">
      <button class="botao__deletar"><img src="/assets/img/botaoDeletar.svg" alt="botao deletar"></button>
      <button class="botao__alterar"><img src="/assets/img/botaoModificar.svg" alt="botao alterar"></button>
    </div>
    <img class="card__imagem" src="${imagem}" alt="">
    <p class="card__nome">${nome}</p>
    <p class="card__preco-antigo"> <span>R$ ${preco}</span> 33% </p>
    <p class="card__preco"> R$ ${preco-(preco * 0.3)}</p>
    <button class="card__botao" onclick="">Ver produto</button>
  `;

  return card;
}
export { criarCard };
