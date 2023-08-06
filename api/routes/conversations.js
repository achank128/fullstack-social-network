const router = require("express").Router();
const {
  createConversation,
  getUserConversation,
  findCon
} = require("../controllers/conversationController");

router.post("/", createConversation);
router.get("/:userId", getUserConversation);
router.get("/find/:firstUserId/:secondUserId", findCon);
module.exports = router;
