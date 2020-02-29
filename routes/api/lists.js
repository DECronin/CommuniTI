const router = require("express").Router();
const listControl = require("../../controllers/listsControl");

// // Matches with "/api/list/:thing?"
// ===================================
// list topics
router.route("/topics").get(listControl.findTopics)
// list threads
router.route("/topic/:id").get(listControl.findThreads)
// new thread
router.route("/thread").post(listControl.newThread)
// list comments
router.route("/thread/:id").get(listControl.findComments)
// new comment
router.route("/comment").post(listControl.newComment)
// update comment
router.route("/comment/:id").put(listControl.updateComment)
// list resources
router.route("/resources").get(listControl.findResources)
// new resource
router.route("/resources").post(listControl.newResource)
// update resource
router.route("/resources/:id").put(listControl.updateResource)

module.exports = router;
