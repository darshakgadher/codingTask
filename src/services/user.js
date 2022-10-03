const { Users } = require("../../models/index");

const getUserById = async (id) => {
  const data = await Users.findOne({ where: { id } });
  return data;
};

const getUserByEmail = async (email) => {
  const data = await Users.findOne({ where: { email } });
  return data;
};

const updateUserDetailsById = async (body, id) => {
  const data = await Users.update(body, { where: { id } });
  return data;
};

module.exports = { getUserById, getUserByEmail, updateUserDetailsById };
