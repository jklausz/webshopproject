exports.up = function(knex) {
    return knex.schema.createTable("order", (table) => {
        table.increments().primary();
        //  table.integer("user_id").unsigned().defaultTo(0);
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.integer("user_id").unsigned().references("id").inTable("users");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("order");
};