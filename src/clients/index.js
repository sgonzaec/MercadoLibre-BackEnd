const MercadoLibre = require ('./mercadoLibre')

function Client(){
    this.Mercadolibre = function(){
        return new MercadoLibre();
    };
}
 
module.exports = Client
