const { ConversationsServices } = require("../services");
require("dotenv").config();

const getUserConversations = async (req, res, next) => {
  try {
    const { id } = req.params;
    const offset = req.query.offset ?? 0;
    const limit = req.query.limit ?? 3;
    const conversations = await ConversationsServices.getByUser(
      id,
      offset,
      limit
    );
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
      conversationId,
      offset,
      limit
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

const getMessages = async (req, res, next) => {
  try {
    const { conversationId } = req.params;
    const offset = Number(req.query.offset ?? 0);
    const limit = Number(req.query.limit ?? 20);
    const messages = await ConversationsServices.getMessages(
      conversationId,
      offset,
      limit
    );
    const { count, rows } = messages;
    res.json({
      count,
      next: `${process.env.HOST}/api/v1${req.path}?offset=${
        offset + limit
      }&limit=${limit}`,
      previous: `${process.env.HOST}/api/v1${req.path}?offset=${
        offset - limit
      }&limit=${limit}`,
      messages: rows,
    });
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
    const data = req.body; 
    const { conversationId } = req.params; 
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
  getMessages,
};
