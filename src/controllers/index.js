const { userRegister, getAllUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");

module.exports = {
  userRegister,
  getAllUser,
  userLogin,
};
