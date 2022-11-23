const { userRegister, getAllUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const {
  getUserConversations,
  getConversationMessages,
  createMessageInConversation,
  createConversation,
} = require("./conversations.controllers");

module.exports = {
  userRegister,
  getAllUser,
  userLogin,
  getUserConversations,
  getConversationMessages,
  createMessageInConversation,
  createConversation,
};

// registrar a un usuario
// login de un usuario
// obtener las conversaciones
// obtener detalles de conversación (mesnajes y participantes)
// Crear conversaciones
// Crear mensajes
// *********** Ustedes ************
// actualizar una conversacion (titulo, imagen, participantes)
// actualizar un usuario ( cmabiar la imagen, nombre )
// eliminar conversaciones ---> agregar una columna con una bandera booleana / es para el usuario y no para todos los participantes
