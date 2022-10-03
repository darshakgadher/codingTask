const { Router } = require("express");
const updateUser = require("../controllers/user");
const user = () => {
  const router = Router();
  router.put("/:id", updateUser);
  return router;
};

module.exports = user;
