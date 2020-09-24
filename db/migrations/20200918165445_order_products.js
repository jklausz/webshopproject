exports.up = function(knex) {
    return knex.schema.createTable("order_products", (table) => {
        table.increments().primary();
        table.integer("order_id").unsigned();
        table.foreign("order_id").references("orderstable.id");
        table.integer("product_id").unsigned();
        table.foreign("product_id").references("products.id");
        table.string("content").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("order_products");
};