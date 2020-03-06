const { createJWT } = require('../scripts/jwtHelper')

// Verifies if a user it authenticated using passport's built in method
exports.checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  return res.status(401).send({ msg: 'Not authorized' })
}

exports.login = (req, res) => {
  console.log(`\n==========\nREQ-USER\n${JSON.stringify(req.user)}\n===========`);
  if (!req.body.remember) {
    // user will need to login again after restart browser
    req.session.cookie.expires = false
  }
  let token
  try {
    token = createJWT(req.user)
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
