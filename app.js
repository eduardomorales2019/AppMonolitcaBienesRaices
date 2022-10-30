// se uso la anexion en package.json para implementar.---
import express from "express";
import Userroutes from "./routes/usuario.js";

const app = express();

// == HABILITAR PUG==

app.set("view engine", "pug");
app.set("/", "./views");

//  == CARPETA PUBLICA ==
app.use(express.static("public"));
// == RUTAS ==

// app.get("/", routes); // SOLO USA LA RUTA PRINCIPAL.  pero ahora  se hara por secciones o una por una

app.use("/auth", Userroutes);

// ==========

// == DEFINIR PUERTO =
const port = 9000;

app.listen(port, () => {
  console.log(`servidor en puerto ${port}`);
});
