exports.up = function(knex, Promise) {
  return knex.schema.createTable('post_table', (table) => {
    table.increments('id').primary()
    table.text('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post_table')
};