const express = require('express');
const app = express();
const UserRouter = require('./modules/users/UserRouter');
const OrderRouter = require('./modules/orders/OrderRouter');


// src === source

app.get('/status', (req, res) => {
    return res.sendStatus(200);
})

app.use('/user', UserRouter);
app.use('/orders', OrderRouter);

app.listen(4000, () => {
    console.log('server started');
})