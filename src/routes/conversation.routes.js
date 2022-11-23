const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const {
  getUserConversations,
  getConversationMessages,
  createMessageInConversation,
  createConversation,
} = require("../controllers");

const router = Router();

router.get("/conversations/:id", authenticate, getUserConversations);
router.get(
  "/conversations/:conversationId/messages",
  authenticate,
  getConversationMessages
);
router.post(
  "/conversations/:conversationId/message",
  authenticate,
  createMessageInConversation
);

router.post("/conversations", authenticate, createConversation);

// crear una conversación
// titulo
// created by
// participantes

module.exports = router;
