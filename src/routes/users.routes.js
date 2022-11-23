const { Router } = require("express");
const { userRegister, getAllUser } = require("../controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     tags:
 *       - Users
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
 *                   items:
 *                     $ref: "#/components/schemas/Users"
 */

router.post("/users", userRegister);
router.get("/users", authenticate, getAllUser);

module.exports = router;
