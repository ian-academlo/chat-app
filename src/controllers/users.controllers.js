const { UserServices } = require("../services");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
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
    const users = await UserServices.getAll();
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
