const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const {
  getUserConversations,
  getConversationMessages,
} = require("../controllers");

const router = Router();

router.get("/conversations/:id", authenticate, getUserConversations);
router.get(
  "/conversations/:conversationId/messages",
  authenticate,
  getConversationMessages
);

module.exports = router;
