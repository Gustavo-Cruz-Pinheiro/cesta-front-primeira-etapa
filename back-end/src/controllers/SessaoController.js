const Usuario = require("../models/Usuario");

module.exports = {
  async store(req, res) {
    const { email, senha } = req.body;
    console.log(email);

    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({ error: "Usuario não encontrado" });
    }
    if (!(await usuario.compareHash(senha))) {
      return res.status(400).json({ error: "Senha inválida" });
    }
    return res.json({ usuario, token: Usuario.generateToken(usuario) });
  }
};
