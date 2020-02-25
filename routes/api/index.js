const router = require("express").Router();
const listRoutes = require("./lists");
const userRoutes = require("./user");

// lists routes
router.use("/list", listRoutes);

// user routes
router.use("/user", userRoutes);

module.exports = router;
