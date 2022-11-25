const { Users, Conversations, Messages, Participants } = require("../models");
// users --> conversations

class ConversationsServices {
  static async getByUser(id, offset, limit) {
    try {
      const conversations = await Users.findAll({
        where: { id },
        attributes: ["id"],
        include: {
          model: Conversations,
          attributes: ["id", "title", "imageUrl"],
        },
        offset,
        limit,
        subQuery: false,
      });
      return conversations;
    } catch (error) {
      throw error;
    }
  }

  static async getMessages(conversationId, offset, limit) {
    try {
      const result = await Messages.findAndCountAll({
        where: { conversationId },
        offset,
        limit,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getWithMessages(id) {
    try {
      const conversationData = await Conversations.findAndCountAll({
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

  static async createMessage(data) {
    try {
      const result = await Messages.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const { createdBy, title, participants } = data;
      const conversation = await Conversations.create({ title, createdBy });
      // {id, title, createdBy, imageURL, createdAt}
      const conversationId = conversation.id;
      // participants = [1, 2]
      // participants = [{conversationId, userId}, {conversationId, userId}]
      // necesito agreagar a los participantes a esa conversación
      const conversationParticipants = participants.map((userId) => {
        return {
          conversationId,
          userId,
        };
      });
      console.log(conversationParticipants);
      // conversationParticipants = [{conversationId, userId}, {conversationId, userId}]
      conversationParticipants.forEach(
        async (participant) => await Participants.create(participant)
      );
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ConversationsServices;
