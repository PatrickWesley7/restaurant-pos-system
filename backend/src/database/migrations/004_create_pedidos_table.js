exports.up = function(knex) {
  return knex.schema.createTable('pedidos', (table) => {
    table.increments('id').primary();
    table.integer('mesa_id').unsigned().notNullable().references('id').inTable('mesas');
    table.integer('usuario_id').unsigned().notNullable().references('id').inTable('usuarios');
    table.enum('status', ['aberto', 'fechado', 'cancelado']).defaultTo('aberto');
    table.decimal('total', 10, 2).defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pedidos');
};
