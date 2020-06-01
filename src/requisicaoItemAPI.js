const fetch = require('node-fetch');

async function pesquisarItem(item = 0, categoria = 0) {

  let URL = 0;
  URL = item ? `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLB/search?q=${item}` :
    `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLB/search?category=${categoria}`;
  if (item && categoria) {
    URL =
      `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLB/search?category=${categoria}&q=${item}`;
  }
  console.log(URL);
  const resposta = await fetch(URL);
  const data = await resposta.json();
  return data.results;
}

export default pesquisarItem;
