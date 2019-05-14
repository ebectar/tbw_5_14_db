const database = require('../connection')

module.exports = {
  list() {
    return database('post_table')
  },
  read(id) {
    return database('post_table').where('id', id).first()
  },
  create(post) {
    return database('post_table').insert(post, '*')
  },
  update(id, post) {
    return database('post_table').where('id', id).update(post, '*')
  },
  delete(id) {
    return database('post_table').where('id', id).delete()
  }
}