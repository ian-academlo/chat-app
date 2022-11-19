const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const { getUserConversations } = require("../controllers");

const router = Router();

router.get("/conversations/:id", authenticate, getUserConversations);

module.exports = router;
