const { productList } = require("../mapper/mapper");

async function getSearchProductList(query, context) {
  const response = await context.clients.Mercadolibre().getProductList(query);
  const result = {
    results: productList(response),
  };
  return result;
}

module.exports = { getSearchProductList };
