import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import api from "../../services/api";

export default function Cadastrar({ history }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await api.post("/usuario", {
      nome,
      email,
      senha
    });

    history.push("/entrar");
  }

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Cadastrar</h1>
          <label htmlFor="name">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Exemplo: Gustavo"
            required
            onChange={event => setNome(event.target.value)}
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Exemplo: gustavo@gmail.com"
            required
            onChange={event => setEmail(event.target.value)}
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            required
            placeholder="Dica: utilize no mínimo 8 caracteres"
            onChange={event => setSenha(event.target.value)}
            minLength="8"
          />

          <button type="submit">Cadastrar</button>

          <Link className="link" to="/entrar">
            <p>Já tem uma conta?</p>
          </Link>
        </form>
      </div>
    </Container>
  );
}
