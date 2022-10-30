const FormularioLogin = (req, res) => {
  res.render(
    "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/views/auth/login.pug",
    { pagina: "Iniciar Sesion" }
  );
};

const FormularioRegistro = (req, res) => {
  res.render(
    "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/views/auth/registro.pug",
    { pagina: "Crear Cuenta" }
  );
};

const FormularioOlvidar = (req, res) => {
  res.render(
    "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/views/auth/olvidarContrasena.pug",
    { pagina: "Recupera tu acceso a Inmo-Puebla" }
  );
};

export { FormularioLogin, FormularioRegistro, FormularioOlvidar };
