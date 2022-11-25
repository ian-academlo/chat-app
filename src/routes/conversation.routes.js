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
 */

const router = Router();
// obtiene todas las conversaciones de un usuario
// primera es agreagar un campo para el parametro de la petición
// user id
// es poder enviar el token en la petición
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

// crear una conversación
// titulo
// created by
// participantes

module.exports = router;

// ?
// es un par clave-valor (key/value)
// ?username=jose&phone=1111111111&country=usa
// https://pokeapi.co/api/v2/pokemon?offset=60&limit=20

// como changaos obtenemos los query params en node??
