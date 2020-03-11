const router = require("express").Router();
const listControl = require("../../controllers/listsControl");

// Public
// =============
// FIND
router.route("/user/:key/:value").get(listControl.findUser)
// (List)
router.route("/topics").get(listControl.findTopics)
router.route("/topic/:id").get(listControl.findThreads)
router.route("/thread/:id").get(listControl.findComments)
router.route("/resources/:key/:value").get(listControl.findResources)

// User Auth
// =============
// CREATE
// new user
router.route("/user").post(listControl.newUser)
router.route("/thread").post(listControl.newThread)
router.route("/comment").post(listControl.newComment)
router.route("/resources").post(listControl.newResource)
// UPDATE
router.route("/user/:id").put(listControl.updateUser)
router.route("/comment/:id").put(listControl.updateComment)
router.route("/resources/:id").put(listControl.updateResource)

module.exports = router;