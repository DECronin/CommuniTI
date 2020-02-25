const router = require("express").Router();
// const listRoutes = require("./lists");
// const userRoutes = require("./user");

router.route("/list/comment").post((req,res) => res.json({message: "connect index api router"}))
// lists routes
// router.use("/list", listRoutes);

// user routes
// router.use("/user", userRoutes);


module.exports = router;
