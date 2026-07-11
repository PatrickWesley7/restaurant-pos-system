exports.up = function(knex) {
  return knex.schema.createTable('mesas', (table) => {
    table.increments('id').primary();
    table.integer('numero').notNullable().unique();
    table.integer('capacidade').notNullable();
    table.enum('status', ['livre', 'ocupada', 'reservada']).defaultTo('livre');
    table.integer('pedido_id').nullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('mesas');
};
