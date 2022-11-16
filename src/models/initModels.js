const { Users, Conversations, Messages } = require("./index");

const initModels = () => {
  // muchos a muchos --> usuarios y conversaciones
  Users.belongsToMany(Conversations, { through: "participants" });
  Conversations.belongsToMany(Users, { through: "participants" });

  // 1 a muchos --> usuarios mensajes
  Messages.belongsTo(Users, { as: "sender", foreignKey: "sender_id" });
  Users.hasMany(Messages, { as: "messages", foreignKey: "sender_id" });

  //1 a muchos --> conversaciones --> mensajes
  Messages.belongsTo(Conversations, {
    as: "chat",
    foreignKey: "conversation_id",
  }); //ConversationId
  Conversations.hasMany(Messages, {
    as: "messages",
    foreignKey: "conversation_id",
  });

  // 1 a muchos --> usuarios y conversaciones
  Conversations.belongsTo(Users, { as: "owner", foreignKey: "created_by" });
  Users.hasMany(Conversations, { as: "chats", foreignKey: "created_by" });
};

module.exports = initModels;

// hicimos el boiler template
// creamos los modelos
// las relaciones
