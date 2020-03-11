const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");

// API Routes
router.use("/api", apiRoutes);

// AUTH Routes
router.use("/auth", authRoutes);

// If no API or AUTH routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
