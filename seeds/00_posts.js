const posts = require('../posts')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "post_table"; ALTER SEQUENCE post_table_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('post_table').insert(posts);
    });
};
