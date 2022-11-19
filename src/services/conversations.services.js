const { Users, Conversations } = require("../models");
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
}

module.exports = ConversationsServices;
