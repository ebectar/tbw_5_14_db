const express = require('express')
const router = express.Router()
const queries = require('../queries/queries.js')

// function validPost(test) {
//   const hasName = typeof test.name == 'string';
//   console.log(test)
//   return hasName
// }

router.get("/", (request, response, next) => {
  queries.list()
    .then(post => response.json(post))
    .catch(next)
})
router.get("/:id", (request, response) => {
  queries.read(request.params.id)
    .then(post => response.json(post))
})
router.post('/', (request, response, next) => {
  queries.create(request.body).then(post => 
    response.json(post[0]));
})


router.put('/:id', (request, response) => {
  queries.update(request.params.id, request.body)
    .then(post => response.json(post[0]))
    .catch(console.error)
})
router.delete('/:id', (request, response) => {
  queries.delete(request.params.id).then(() => {
    queries.list()
      .then(post => response.json(post))
  })
})
module.exports = router