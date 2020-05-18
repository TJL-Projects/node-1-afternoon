const express = require('express');
const ctrl = require('./getProducts');

const app = express();

const SERVER_PORT = 3000;

app.get('/api/products', ctrl.getProducts);
app.get(`/api/products/:id`, ctrl.getProductByID)


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port: ${SERVER_PORT}`);
});