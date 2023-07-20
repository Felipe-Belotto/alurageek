async function recebeAPI() {
  const endpointAPI = await fetch(
    "https://64b8785621b9aa6eb079e1c0.mockapi.io/produtos"
  );
  const listaAPI = await endpointAPI.json();

  return listaAPI;
}

export { recebeAPI };
