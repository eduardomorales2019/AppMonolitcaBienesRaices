import express from "express";
import { FormularioLogin } from "../controllers/usuarioControler.js";
const router = express.Router();

import { FormularioRegistro } from "../controllers/usuarioControler.js";

// =========================Routing ========================
// definir el routing o paginas de la app. segu verbo codigo cambiara.
router.get("/login", FormularioLogin);
router.get("/registro", FormularioRegistro);

// =========================Routing ========================
export default router;
