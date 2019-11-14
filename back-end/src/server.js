const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);

mongoose.connect("mongodb://localhost:27017/app-coleta-dados", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

server.listen(3333);
