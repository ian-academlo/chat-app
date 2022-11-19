const { Participants } = require("../models");

class ConversationsServices {
  static async getByUser(id) {
    try {
      const conversations = await Participants.findAll({
        where: { userId: id },
      });
      return conversations;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConversationsServices;
