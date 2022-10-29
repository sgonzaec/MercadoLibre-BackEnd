function productList(response) {
  const products = [];
  for (const product of response.results) {
    const item = {
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      prices: product.prices,
      address: {
        state_name: product.address.state_name,
      },
      shipping: {
        free_shipping: product.shipping.free_shipping,
      },
      currency_id: product.currency_id,
    };
    products.push(item);
  }
  return products;
}

module.exports = { productList };
