const { ConversationsServices } = require("../services");

const getUserConversations = async (req, res, next) => {
  try {
    const { id } = req.params;
    const conversations = await ConversationsServices.getByUser(id);
    res.json(conversations);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};

const getConversationMessages = async (req, res, next) => {
  try {
    const { conversationId } = req.params;
    const conversationData = await ConversationsServices.getWithMessages(
      conversationId
    );
    res.json(conversationData);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};

const createMessageInConversation = async (req, res, next) => {
  try {
    const data = req.body; // senderId, message
    const { conversationId } = req.params; // {senderId, message, conversationId}
    const result = await ConversationsServices.createMessage({
      ...data,
      conversationId,
    });
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};

const createConversation = async (req, res, next) => {
  try {
    // creator, title, participants
    //{ createdBy: 1, title: 'lasdñkjfalk', participants: [1, 3] }
    const data = req.body;
    const result = await ConversationsServices.create(data);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};

module.exports = {
  getUserConversations,
  getConversationMessages,
  createMessageInConversation,
  createConversation,
};
