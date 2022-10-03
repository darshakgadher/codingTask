const { Router } = require("express");
const { updateUser, getToken } = require("../controllers/user");
const { verifyAuthToken } = require("../middleware/verifyToken");

const user = () => {
  const router = Router();
  router.post("/token", getToken);
  router.put("/user/:id", verifyAuthToken, updateUser);
  return router;
};

module.exports = user;
