const express = require('express');
const logger = require('morgan');
const Client = require('./src/clients');
const { getSearchProductList } = require('./src/middleware/getSearchProductList');
const port = 3000;
const context = {
  clients: new Client()
}  

const app = express();
app.use(logger('dev'));
  
app.get('/:query', async (req, res) => {
    const response = await getSearchProductList(req.params.query, context)
    res.status(200).send(response);
});
  
app.listen(port, () => {
  console.log(`Started at ${port}`);
});