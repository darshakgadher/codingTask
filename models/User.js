"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}
  Users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.TEXT,
      dob: DataTypes.DATEONLY,
      gender: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      userType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
