const jwt = require('jsonwebtoken')

/**
 * Creates a JWT token
 * @param {object} user - User object in form of {user: { id, email }, role }
 * @returns {string} - JWT token
 */
exports.createJWT = ({ id, username }) => {
  const payload = { user: { id, username } }
  const secret = process.env.AUTH_SECRET
  const options = {
    // expiresIn: '30d'
  }
  return jwt.sign(payload, secret, options)
}

/**
 * Verifies a JWT token
 * @param {string} token - User object from database
 * @returns {object} Returns the payload decoded if the signature is valid
 *  and optional expiration, audience, or issuer are valid.
 *  If not, it will throw the error.
 */
exports.verifyJWT = token => {
  const secret = process.env.AUTH_SECRET
  const options = {
    // maxAge: '30d'
  }
  try {
    const decoded = jwt.verify(token, secret, options)
    return decoded
  } catch (err) {
    // err
    console.log(err)
    throw new Error(err.message)
  }
}
