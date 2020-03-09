const { createJWT } = require('../scripts/jwtHelper')

// Verifies if a user it authenticated using passport's built in method
exports.checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  return res.status(401).send({ msg: 'Not authorized' })
}

exports.login = (req, res) => {
  if (!req.body.remember) {
    // user will need to login again after restart browser
    req.session.cookie.expires = false
  }
  
  // ???????????
  req.session.cookie.expires = true
  req.session.cookie.originalMaxAge = 1000 * 60 * 60 * 24 * 3

  let token
  try {
    token = createJWT(req.user)
    process.env.AUTH_SECRET = token; //?????
    res
      .status(200)
      .cookie('jwt', token, { httpOnly: true })
      .json(req.user)
  } catch (err) {
    console.log('Create Token Error', err)
  }
}

exports.logout = (req, res) => {
  req.logout()
  res.status(200).json({ msg: 'Successful logout' })
}
