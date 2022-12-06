const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const {
  getUserConversations,
  getConversationMessages,
  createMessageInConversation,
  createConversation,
  getMessages,
} = require("../controllers");

/**
 * @openapi
 * /api/v1/conversations/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all conversations from user
 *     tags: [conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 * /api/v1/conversations/messages/{conversationId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Obtener todos los mensajes de una conversación
 *     tags: [conversations]
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: El id de la conversación donde obtendremos los mensajes
 */

const router = Router();
router.get("/conversations/:id", authenticate, getUserConversations);
router.get("/conversations/messages/:conversationId", getMessages);
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


module.exports = router;