const products = require('./assets/products.json');

exports.seed = async function(knex) {
    await knex('products').del();
    await knex('products').insert(products);
};