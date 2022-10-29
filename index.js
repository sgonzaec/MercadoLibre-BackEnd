const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const Client = require('./src/clients');
const { getProductDescription } = require('./src/middleware/getProductDescription');
const { getProductDetail } = require('./src/middleware/getProductDetail');
const { getSearchProductList } = require('./src/middleware/getSearchProductList');

const port = 8080;
const context = {
  clients: new Client()
}  

const app = express();

app.use(logger('dev'));
app.use(cors())

app.get('/search/:query', async (req, res) => {
    const response = await getSearchProductList(req.params.query, context)
    res.status(200).send(response);
});
 
app.get('/items/:id', async (req, res) => {
  const response = await getProductDetail(req.params.id, context)
  res.status(200).send(response);
});

app.get('/items/:id/description', async (req, res) => {
  const response = await getProductDescription(req.params.id, context)
  res.status(200).send(response);
});
  
app.listen(port, () => {
  console.log(`Started at ${port}`);
});