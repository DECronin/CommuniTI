require('dotenv').config()

const express = require('express')
const path = require('path')
const cors = require('cors')
const session = require('express-session')
const logger = require('morgan');
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
// const SequelizeStore = require('express-session-sequelize')(session.Store)
const passport = require('./config/passport')
const routes = require('./routes')
// const db = require('./models')

// const sessionStore = new SequelizeStore({ db: db.sequelize })

const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

// Setup session
const sessionOpts = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
  },
  resave: true,
  expire: new Date(Date.now() + (30 * 86400 * 1000)),
  saveUninitialized: true,
  // store: sessionStore
}

app.get('/ping', function(request, response) {
  response.send('Server is up and running.')
})

// Middleware
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(expressSession(sessionOpts))
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
