const { default: fetch } = require("node-fetch");
const { MERCADOLIBRE_URL } = require("../contants");

function MercadoLibre() {

  this.url= MERCADOLIBRE_URL;
  
  this.getProductList = async function (query) {
    try {
      return await fetch(`${this.url}sites/MLA/search?q=${query}`, {
        method: "GET",
      }).then(response => response.json()).then(result => {return result}).catch(error => {return error});
    } catch (error) {
      return error;
    }
  }
  
  this.getProductDetail = async function(id) {
    try {
      return await fetch(`${this.url}items/${id}`, {
        method: "GET",
      }).then(response => response.json()).then(result => {return result}).catch(error => {return error});
    } catch (error) {
      return error;
    }
  }
  
  this.getProductDescription = async function(id) {
    try {
      return await fetch(`${this.url}items/${id}/description`, {
        method: "GET",
      }).then(response => response.json()).then(result => {return result}).catch(error => {return error});
    } catch (error) {
      return error;
    }
  }
}

module.exports = MercadoLibre