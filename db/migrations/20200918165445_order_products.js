exports.up = function(knex) {
    return knex.schema.createTable("order_products", (table) => {
        table.increments().primary();
        table.integer("order_id").unsigned();
        table.foreign("order_id").references("order.id");
        table.integer("product_id").unsigned();
        table.foreign("product_id").references("products.id");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("order_products");
};