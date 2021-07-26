const { Product, Sell } = require('../models');

module.exports = {
    createProduct: async (productData) => {
        try {
            const productCreated = await Product.create(productData);
            return productCreated;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    findProduct: async (productId) => {
        try {
            const product = await Product.findByPk(productId);
            return product;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    findProductWithSells: async (productId) => {
        try {
            const product = await Product.findOne({
                where: {
                    id: productId
                },
                include: ['sells'],
            });
            return product;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};