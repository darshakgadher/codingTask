const express = require("express");
const cors = require("cors");
const route = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());

const user = route.user();
const basePath = "/api";

app.use(basePath, user);

module.exports = app;
