const { Users } = require("../models");

class UserServices {
  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
