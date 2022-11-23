const { Users, Conversations, Messages } = require("../models");
// users --> conversations

class ConversationsServices {
  static async getByUser(id) {
    try {
      const conversations = await Users.findAll({
        where: { id },
        attributes: ["id"],
        include: {
          model: Conversations,
          attributes: ["id", "title", "imageUrl"],
        },
      });
      return conversations;
    } catch (error) {
      throw error;
    }
  }
  static async getWithMessages(id) {
    try {
      const conversationData = await Conversations.findOne({
        where: { id },
        include: [
          {
            model: Messages,
            as: "messages",
          },
          {
            model: Users,
          },
        ],
      });
      return conversationData;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConversationsServices;
