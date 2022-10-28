
async function getProductDetail(id, context) {
    const response = await context.clients.Mercadolibre().getProductDetail(id)
    const result  = response
    return result;
  }
  
  module.exports = {getProductDetail};