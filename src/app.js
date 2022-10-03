const express = require("express");
const cors = require("cors");
const route = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());

const healthCheckupPoint = route.healthCheckupPoint();
const user = route.user();
const basePath = "/test";

app.use(healthCheckupPoint);
app.use(basePath, user);

module.exports = app;
