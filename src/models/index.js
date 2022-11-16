// importar los modelos
// exportarlos

// Agrupar todos los modelos para encontrarlos en una
// sola direccion
const Users = require("./users.models");
const Conversations = require("./conversations.models");
const Messages = require("./messages.models");

module.exports = {
  Users,
  Conversations,
  Messages,
};
