const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Ian
 *         lastname:
 *           type: string
 *           example: Rosas
 *         email:
 *           type: string
 *           example: ian@gmail.com
 *     register:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Ian
 *         lastname:
 *           type: string
 *           example: Rosas
 *         email:
 *           type: string
 *           example: ian@gmail.com
 *         phone:
 *           type: string
 *           example: 0000000000
 *         password:
 *           type: string
 *           example: 1234
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.STRING,
      field: "profile_image",
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      },
    },
  }
);

module.exports = Users;
