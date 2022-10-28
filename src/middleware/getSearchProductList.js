
async function getSearchProductList(query, context) {
  const response = await context.clients.Mercadolibre().getProductList(query)
  const result  = response.results
  return result;
}

module.exports = {getSearchProductList};