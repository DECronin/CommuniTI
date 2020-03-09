require('dotenv').config()

const express = require('express')
const path = require('path')
const cors = require('cors')
const logger = require('morgan');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('./config/passport')
const routes = require('./routes')

const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

// Setup session                                                          // Window.localStorage?
const sessionOpts = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 3 // 3 days
  },
  resave: true,
  expire: new Date(Date.now() + (30 * 86400 * 1000)),
  saveUninitialized: true
}

app.get('/ping', function(request, response) {
  response.send('Server is up and running.')
})

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session(sessionOpts))
app.use(passport.initialize())
app.use(passport.session())

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'))
}

app.use(routes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

module.exports = app
