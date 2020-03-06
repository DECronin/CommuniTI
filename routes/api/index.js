const router = require("express").Router();
const listControl = require("../../controllers/listsControl");
// const middleAuth = require("../../controllers/middleAuth");

// Matches with "/api/:thing?"

// Public
// =============
// FIND (List)
router.route("/topics").get(listControl.findTopics)
router.route("/topic/:id").get(listControl.findThreads)
router.route("/thread/:id").get(listControl.findComments)
router.route("/resources").get(listControl.findResources)

// User Auth
// =============
// CREATE
// new user
router.route("/thread").post(listControl.newThread)
router.route("/comment").post(listControl.newComment)
router.route("/resources").post(listControl.newResource)
// UPDATE
router.route("/comment/:id").put(listControl.updateComment)
router.route("/resources/:id").put(listControl.updateResource)

module.exports = router;