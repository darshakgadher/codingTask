const express = require("express");
const cors = require("cors");
const route = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());

const healthCheckupPoint = route.healthCheckupPoint();
const basePath = "/test";

app.use(healthCheckupPoint);
module.exports = app;
