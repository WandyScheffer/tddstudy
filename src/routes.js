const express = require('express');
const { createProduct, findProduct, findProductWithSells } = require('../controllers/Product');
const { createUser } = require('../controllers/User');
const routes = express.Router();

routes.post('/user', async (req, res) => {
    try {
        const userCreated = await createUser(req.body);
        res.status(201).send(userCreated);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

routes.post('/product', async (req, res) => {
    try {
        const productCreated = await createProduct(req.body);
        res.status(201).send(productCreated);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

routes.get('/product/:id', async (req, res) => {
    try {
        const product = await findProduct(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

routes.get('/product/:id/sells', async (req, res) => {
    try {
        const product = await findProductWithSells(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
});

module.exports = routes;