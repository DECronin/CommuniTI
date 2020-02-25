const router = require("express").Router();
const listController = require("../../controllers/listControl");

// // Matches with "/api/list/:thing?"
// ===================================
// list topics
router.route("/topics").get(listController.findTopics)
// list threads
router.route("/topic/:id").get(listController.findThreads)
// new thread
router.route("/thread").create(listController.newThread)
// list comments
router.route("/thread/:id").get(listController.findComments)
// new comment
router.route("/comment").create(listController.newComment)
// update comment
router.route("/comment/:id").put(listController.updateComment)
// list resources
router.route("/resources").get(listController.findResources)
// new resource
router.route("/resources").create(listController.newResource)
// update resource
router.route("/resources/:id").put(listController.updateResource)

module.exports = router;
