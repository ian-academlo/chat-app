const db = require("../utils/database");
const { Users, Participants, Messages, Conversations } = require("../models");
const initModels = require("../models/initModels");

initModels();

const users = [
  {
    firstname: "María",
    lastname: "Godoy",
    email: "maria@gmail.com",
    password: "1234",
    phone: "0000000000",
  },
  {
    firstname: "Germán ",
    lastname: "Silva",
    email: "ger@hotmail.com",
    password: "123456",
    phone: "5599887744",
  },
  {
    firstname: "Jose",
    lastname: "Tejero",
    email: "jose@email.com",
    password: "1234",
    phone: "9999999999",
  },
];

const conversations = [
  {
    title: "Con el compa",
    createdBy: 2,
  },
  {
    title: "Con los compas",
    type: "group",
    createdBy: 1,
  },
  {
    title: "No idea",
    createdBy: 3,
  },
];

const participants = [
  { conversationId: 1, userId: 2 },
  { conversationId: 1, userId: 1 },
  { conversationId: 2, userId: 1 },
  { conversationId: 2, userId: 2 },
  { conversationId: 2, userId: 3 },
  { conversationId: 3, userId: 3 },
  { conversationId: 3, userId: 1 },
];

const messages = [
  { senderId: 2, conversationId: 1, message: "Hola" },
  { senderId: 1, conversationId: 1, message: "Quien eres?" },
  { senderId: 2, conversationId: 1, message: "No lo sé, dime tu!" },
  { senderId: 3, conversationId: 2, message: "Salimos o k?" },
  {
    senderId: 1,
    conversationId: 2,
    message: "No puedo ando con express y sequelize",
  },
  { senderId: 3, conversationId: 2, message: "No me digas!" },
  { senderId: 2, conversationId: 2, message: "Yo ya envie los proyectos!" },
  { senderId: 3, conversationId: 3, message: "Ya estoy aqui" },
  { senderId: 1, conversationId: 3, message: "Voy bajando" },
];

db.sync({ force: true }).then(() => {
  console.log("Sunronizado");
  users.forEach(async (user) => await Users.create(user));
  setTimeout(() => {
    conversations.forEach(
      async (conversation) => await Conversations.create(conversation)
    );
  }, 100);
});
