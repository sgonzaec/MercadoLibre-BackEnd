const express = require('express');
const logger = require('morgan');
const { getSearchProductList } = require('./src/middleware/getSearchProductList/getSearchProductList');
const port = 3000;
  
const app = express();
app.use(logger('dev'));
  
app.get('/:query', (req, res) => {
    const response = getSearchProductList(req.params.query)

    res.status(200).send(response);
});
  
app.listen(port, () => {
  console.log(`Started at ${port}`);
});