
async function getProductDescription(id, context) {
    const response = await context.clients.Mercadolibre().getProductDescription(id)
    const result  = {
      plain_text: response.plain_text
    }
    return result;
  }
  
  module.exports = {getProductDescription};