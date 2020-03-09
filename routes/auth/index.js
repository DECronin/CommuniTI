const router = require('express').Router();
const passport = require('passport');
const { checkAuthentication, login, logout } = require('../../controllers/middleControl');

router.route('/logout').get(checkAuthentication, logout);
router.route('/login').post(passport.authenticate('local'), login);
router.route('/').get(checkAuthentication, (req, res) => {
  res.json(req.user)
});

module.exports = router;