const { UserServices } = require("../services");
const welcomeTemplate = require("../templates/welcome");
const transporter = require("../utils/mailer");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
    // en este punto sabemos que el usuario se registro correctamente
    // es aqui donde tengo que enviar un correo electronico
    transporter.sendMail({
      from: "<ian.rosas@academlo.com>",
      to: result.email,
      subject: "Bienvenido a chat app",
      text: `Hola ${result.firstname} ${result.lastname} bienvenido a la mejor aplicación clon de mensajeria jamás antes vista`,
      html: welcomeTemplate(result.firstname, result.lastname),
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const offset = req.query.offset ?? 0;
    const limit = req.query.limit ?? 3;
    const users = await UserServices.getAll(offset, limit);
    res.json(users);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

module.exports = {
  userRegister,
  getAllUser,
};
