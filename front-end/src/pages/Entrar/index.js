import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import api from "../../services/api";

export default function Entrar({ history }) {
  const [email, setEmail] = new useState("");
  const [senha, setSenha] = new useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post("/sessao", {
        email,
        senha
      });
      const { token } = response.data;
      console.log(token);

      if (token) {
        localStorage.setItem("@CESTA/token", token);
      }
    } catch (erro) {
      console.log("response", erro);
    }
    history.push("/menu");
  }

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            required
            onChange={event => setEmail(event.target.value)}
            value={email}
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            required
            onChange={event => setSenha(event.target.value)}
            value={senha}
            minLength="8"
          />

          <button type="submit">Entrar</button>

          <Link className="link" to="/">
            <p>Não tem uma conta? Cadastre-se</p>
          </Link>
        </form>
      </div>
    </Container>
  );
}
