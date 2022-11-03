import express from "express";

import {
  FormularioLogin,
  FormularioRegistro,
  Registrar,
  Confirmar,
  FormularioOlvidar,
} from "../controllers/usuarioControler.js";

const router = express.Router();
// =========================Routing ========================
// definir el routing o paginas de la app. segu verbo codigo cambiara.
router.get("/login", FormularioLogin);

router.get("/registro", FormularioRegistro);
router.post("/registro", Registrar);

// confirmacion de  correo.
// leemos las token , serian dinamicos.
router.get("/confirmar/:token", Confirmar);

router.get("/olvidar", FormularioOlvidar);

// =========================Routing ========================
export default router;
