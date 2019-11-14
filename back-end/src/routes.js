const express = require("express");
const routes = express.Router();
const UsuarioController = require("./controllers/UsuarioController");
const SessaoController = require("./controllers/SessaoController");
const authMiddleware = require("./middlewares/auth");

routes.post("/usuario", UsuarioController.store);
routes.get("/usuario", UsuarioController.list);
routes.get("/usuario/:email", UsuarioController.index);
routes.put("/usuario/:email", UsuarioController.update);
routes.post("/sessao", SessaoController.store);

routes.use(authMiddleware);
routes.delete("/usuario/:id", UsuarioController.destroy);

module.exports = routes;
