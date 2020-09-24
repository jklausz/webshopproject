exports.up = function(knex) {
    return knex.schema.createTable("orderstable", (table) => {
        table.increments().primary();
        //  table.integer("user_id").unsigned().defaultTo(0);
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.integer("user_id").unsigned().references("id").inTable("users");
        table.integer("product_id").unsigned().references("id").inTable("products");
        table.string("content").notNullable();
        // table.foreign("product_id").references("products.id");
        // table.integer("product_id").unsigned();
        // table.foreign("product_id").references("products.id");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("orderstable");
};