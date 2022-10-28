export function getProductList(query) {
  try {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`, {
      method: "GET",
    });
  } catch (error) {
    return error;
  }
}

export function getProductDetail(id) {
  try {
    return fetch(`https://api.mercadolibre.com/items/${id}`, {
      method: "GET",
    });
  } catch (error) {
    return error;
  }
}

export function getProductDescription(id) {
  try {
    return fetch(`https://api.mercadolibre.com/items/${id}/description`, {
      method: "GET",
    });
  } catch (error) {
    return error;
  }
}
