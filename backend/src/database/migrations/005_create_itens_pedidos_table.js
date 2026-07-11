exports.up = function(knex) {
  return knex.schema.createTable('itens_pedidos', (table) => {
    table.increments('id').primary();
    table.integer('pedido_id').unsigned().notNullable().references('id').inTable('pedidos').onDelete('CASCADE');
    table.integer('produto_id').unsigned().notNullable().references('id').inTable('produtos');
    table.integer('quantidade').notNullable();
    table.decimal('preco_unitario', 10, 2).notNullable();
    table.decimal('subtotal', 10, 2).notNullable();
    table.text('observacoes').nullable();
    table.enum('status', ['pendente', 'preparando', 'pronto', 'entregue']).defaultTo('pendente');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('itens_pedidos');
};
