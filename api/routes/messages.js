const router = require("express").Router();
const {
  createMessage,
  getMessages,
} = require("../controllers/messageController");

router.post("/", createMessage);
router.get("/:conversationId", getMessages);

module.exports = router;
