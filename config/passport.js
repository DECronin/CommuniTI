const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('../models')

passport.use(
  'local',
  new LocalStrategy(
    (username, password, done) => {
      db.Users.findOne({ where: { username } })
        .then(user => {
          if (!user) {
            return done(null, false, {
              message: 'Incorrect Login.'
            })
          }
          if (!user.validPassword(password)) {
            return done(null, false, {
              message: 'Incorrect password.'
            })
          }
          return done(null, { id: user.id })
        })
        .catch(err => done(err))
    }
  )
)
passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((id, done) => {
  db.Users.findOne({
    where: id
  })
    .then(user => done(null, user))
    .catch(err => done(err))
})

module.exports = passport
