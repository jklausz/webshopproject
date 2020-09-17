exports.up = function(knex) {
    return knex.schema.createTable("products", (table) => {
        table.increments();
        table.string('name').notNullable();
        table.text('description').notNullable();
        table.decimal('price').notNullable();
        table.integer('quantity').notNullable();


    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("products");
};