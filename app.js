const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = (module.exports = express())
const port = parseInt(process.env.PORT || 3001)

const route = require('./routes/routes')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cors({
  origin: true,
  credentials: true
}))

app.use('/', route)


app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({
      message: err.message,
      error: req.app.get('env') === 'development' ? err.stack : {}
    })
})

app.use(notFound)

function notFound(req, res) {
  const url = req.originalUrl
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    console.error('[404: Requested file not found] ', url)
  }
  res
    .status(404)
    .send({
      error: 'Url not found',
      status: 404,
      url
    })
}

app
  .listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port))