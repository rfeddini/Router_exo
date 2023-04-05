const express = require('express');
const OrderRouter = express.Router();

OrderRouter.get('/', (req, res) => {
    return res.status(200).send([]);
})

module.exports = OrderRouter;