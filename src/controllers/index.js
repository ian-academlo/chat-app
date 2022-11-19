const { userRegister, getAllUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { getUserConversations } = require("./conversations.controllers");

module.exports = {
  userRegister,
  getAllUser,
  userLogin,
  getUserConversations,
};
