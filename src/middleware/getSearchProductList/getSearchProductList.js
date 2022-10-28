import clients from "../../clients";

async function getSearchProductList(query) {
  const result = await clients.mercadolibre.getProductList(query);

  return result.json();
}

module.exports = {getSearchProductList};