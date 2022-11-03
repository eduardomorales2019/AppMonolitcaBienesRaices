import { check, validationResult } from "express-validator";
// imoprtar  a usuario que es esta en el modelo , seria la instancia del modelo. !
import Usuario from "../models/Usuario.js";
import { generarId } from "../helpers/tokens.js";
import { emailRegistro } from "../helpers/emails.js";

// =========================================================================================================================
const FormularioLogin = (req, res) => {
  res.render(
    "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/views/auth/login.pug",
    { pagina: "Iniciar Sesion" }
  );
};

// =========================================================================================================================
const FormularioRegistro = (req, res) => {
  res.render(
    "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/views/auth/registro.pug",
    { pagina: "Crear Cuenta" }
  );
};
// como crear registros !!  importar la instancia de db creada.
// sera asyncrona ya que la respuesta puede tardar y  codigo no puede parar.
// =========================================================================================================================
const Registrar = async (req, res) => {
  // ================ validacion===================
  // ================ reglas de verificacion ===================
  await check("nombre")
    .notEmpty()
    .withMessage("El nombre no puede ir vacio")
    .run(req);

  await check("email")
    .isEmail()
    .withMessage("debe ser un email valido")
    .run(req);

  await check("password")
    .isLength({ min: 6 })
    .withMessage("la constraseña debe tener minimo 6 caracteres")
    .run(req);
  // NO ME FUNCIONA !!!
  // await check("repetir_password")
  //   .equals("password")
  //   .withMessage("la constraseña no es la misma")
  //   .run(req);

  let resultado = validationResult(req);
  // =========================================================================================================================
  // ================ veriificar que el resultado este vacio. ===================

  if (!resultado.isEmpty()) {
    //   ===========ERRORES ==================
    return res.render(
      "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/views/auth/registro.pug",
      {
        pagina: "Crear Cuenta",
        errores: resultado.array(),
        usuario: {
          nombre: req.body.nombre,
          email: req.body.email,
        },
      }
    );
  }

  // destructuracion de objecty del body,

  const { nombre, email, password } = req.body;

  // =========================================================================================================================
  // ===================USUARIO DUPLICADO =========================
  // Verificar  usuario duplicado. revisar que desde el  modelo esta la instancia que nos  general el db()sync para  que sea igual que le  body de esa funcion.  y no haya problemas al crearla.

  const usuarioExistente = await Usuario.findOne({
    where: { email },
  });

  if (usuarioExistente) {
    return res.render(
      "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/views/auth/registro.pug",
      {
        pagina: "Crear Cuenta",
        errores: [{ msg: "el usuario ya esta Registrado" }],
        usuario: { nombre: nombre, email: email },
      }
    );
  }

  // console.log(usuarioExistente, "usuario existenteee");
  // return;
  // =========================

  // =========================================================================================================================
  // ====  ALMACENAR USUARIO  =====
  const usuario = await Usuario.create({
    nombre,
    email,
    password,
    // este token es para mandar al usuariopor emal su contrasñe-
    token: generarId,
  });

  // =========================================================================================================================
  // ENVIAR EMAIL DE CONFIRMACION.----
  // al crear la constante de usuario, ahi se van almacenar nuestro objeto en el cual usaremos para poder obtener el  token y el nonbre y el correo.

  // aqui no papsamos el usuario compeleto solo alguno parametros.
  emailRegistro({
    nombre: usuario.nombre,
    email: usuario.email,
    token: usuario.token,
  });

  // =========================================================================================================================
  //  Mostrar mensaje de confirmacion.==============

  res.render(
    "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/views/templates/mensaje",
    {
      pagina: "Cuenta creada correctamente ",
      mensaje:
        "Hemos enviado un Email de Confirmación , presiona en el enlace  ",
    }
  );
};

// =============================  CONFIRMAR ========================================================================
const Confirmar = async (req, res, next) => {
  const { token } = req.params;
  // ==================VERIFICACION DE TOKEN VALIDO Y Y CONFIRMACION DECUENTA=========================================
  console.log(token);

  //  token Valido (()verificacion. ) para activacion de cuenta. !
  const usuario = await Usuario.findOne({ where: { token } });
  console.log(usuario, "usuario de findone ");
  // validacion usuario.--

  if (!usuario) {
    res.render(
      "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/views/auth/confirmar-cuenta.pug",
      {
        pagina: "Error el confirmar tu cuenta",
        mensaje: " Hubo un error al confirmar tu cuenta",
        error: true,
      }
    );
    // ! aqui la vamos a verificar un objecto  cambiarlo a  null y de ahi con un metodo de sequialize vamos a salvar y tener persistencia en la base de datos.
  } // CONFIMAR SI ES EL USUARIO.
  console.log(usuario.token);
  usuario.token = null;
  usuario.confirmado = true;

  await usuario.save();
  console.log(usuario);

  res.render(
    "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/views/auth/confirmar-cuenta.pug",
    {
      pagina: "Cuenta Confirmada",
      mensaje: " La cuenta se confirmo correctamente",
    }
  );
};
// =======================================================================================================

const FormularioOlvidar = (req, res) => {
  res.render(
    "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/views/auth/olvidarContrasena.pug",
    { pagina: "Recupera tu acceso a Inmo-Puebla" }
  );
};

export {
  FormularioLogin,
  FormularioRegistro,
  Registrar,
  Confirmar,
  FormularioOlvidar,
};
