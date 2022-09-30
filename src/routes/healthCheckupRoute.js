const { Router } = require("express");

const healthCheckupPoint = () => {
  const router = Router();
  router.get("/", (req, res) => {
    res.status(200).send("ok");
  });
  return router;
};

module.exports = healthCheckupPoint;
