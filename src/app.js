const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// variables
const app = express()
const indexRoutes = require('./routes/index.js')

// middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.use('/', indexRoutes)

// settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'))
})
