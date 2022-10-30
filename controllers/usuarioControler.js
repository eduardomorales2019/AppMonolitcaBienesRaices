import { check, validationResult } from "express-validator";

// imoprtar  a usuario que es esta en el modelo , seria la instancia del modelo. !
import Usuario from "../models/Usuario.js";

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
// como crear registros !!  importar la instancia de db creada.
// sera asyncrona ya que la respuesta puede tardar y  codigo no puede parar.
const Registrar = async (req, res) => {
  // ================ validacion
  await check("nombre")
    .notEmpty()
    .withMessage("El nombre no puede ir vacio")
    .run(req);
  let resultado = validationResult(req);
  res.json(resultado.array());

  // ================

  const usuario = await Usuario.create(req.body);
  res.json(usuario);
};

const FormularioOlvidar = (req, res) => {
  res.render(
    "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/views/auth/olvidarContrasena.pug",
    { pagina: "Recupera tu acceso a Inmo-Puebla" }
  );
};

export { FormularioLogin, FormularioRegistro, FormularioOlvidar, Registrar };
