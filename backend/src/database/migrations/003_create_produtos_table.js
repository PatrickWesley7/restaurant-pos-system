exports.up = function(knex) {
  return knex.schema.createTable('produtos', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.text('descricao').nullable();
    table.decimal('preco', 10, 2).notNullable();
    table.enum('tipo', ['prato', 'bebida', 'sobremesa', 'outro']).notNullable();
    table.boolean('ativo').defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos');
};
