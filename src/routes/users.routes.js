const { Router } = require("express");
const { userRegister, getAllUser } = require("../controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/users", userRegister);
router.get("/users", authenticate, getAllUser);

module.exports = router;
