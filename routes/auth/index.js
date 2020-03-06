// const router = require("express").Router();
// const userController = require("../../controllers/userControl");

// // Matches with "/auth/:user?"
// router.route("/login")
//   .get(userController.findAll)
// //   .post(userController.create);

// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)

//================================================

const router = require('express').Router();
const passport = require('passport');
const { checkAuthentication, login, logout } = require('../../controllers/middleControl');

router.route('/logout').get(checkAuthentication, logout);
router.route('/login').post(passport.authenticate('local'), login);
router.route('/').get(checkAuthentication, (req, res) => {
  res.json(req.user)
});

module.exports = router;