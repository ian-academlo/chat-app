const { Router } = require("express");
const { userRegister } = require("../controllers");

const router = Router();

router.post("/users", userRegister);

module.exports = router;
