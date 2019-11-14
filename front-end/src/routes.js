import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Entrar from "./pages/Entrar";
import Cadastrar from "./pages/Cadastrar";
import Menu from "./pages/Menu";
import RotaPrivada from "./components/rotas";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Cadastrar} />
      <Route path="/entrar" component={Entrar} />
      <RotaPrivada path="/menu" component={Menu} />
    </BrowserRouter>
  );
}
