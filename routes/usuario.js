import express from "express";

const router = express.Router();

// =========================Routing ========================
// definir el routing o paginas de la app. segu verbo codigo cambiara.
router.get("/", (req, res) => {
  res.send("Servidor Funcionando en express");
});

// =========================Routing ========================
export default router;
