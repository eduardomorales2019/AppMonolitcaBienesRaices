import express from "express";
import { FormularioLogin } from "../controllers/usuarioControler.js";
import { FormularioRegistro } from "../controllers/usuarioControler.js";
import { FormularioOlvidar } from "../controllers/usuarioControler.js";

const router = express.Router();
// =========================Routing ========================
// definir el routing o paginas de la app. segu verbo codigo cambiara.
router.get("/login", FormularioLogin);
router.get("/registro", FormularioRegistro);
router.get("/olvidar", FormularioOlvidar);

// =========================Routing ========================
export default router;
