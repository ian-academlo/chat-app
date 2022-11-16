const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Messages = db.define(
  "messages",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "sender_id",
    },
    conversationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "conversation_id",
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    updatedAt: false,
  }
);

module.exports = Messages;
