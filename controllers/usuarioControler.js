const FormularioLogin = (req, res) => {
  res.render(
    "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/auth/login.pug",
    { authenticado: true }
  );
};

const FormularioRegistro = (req, res) => {
  res.render(
    "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/auth/registro.pug"
  );
};

export { FormularioLogin, FormularioRegistro };
