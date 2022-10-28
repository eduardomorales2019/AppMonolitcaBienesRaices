// const express = require("express");

// habilitando en package.json() y llamando con import modules.--
import express from "express";
import Userroutes from "./routes/usuario.js";
// llamar la app- servidor, proyect. contiene la informacion del servidor de express.
const app = express();

// hablilitar pug que solo seria en este proyecto para una aplicacion monolitica.  ()quiero usar pug y especificar la carpeta en donde estan las vistas. !! USE SET....

app.set("view engine", "pug");
app.set("/", "./views");

// Routas====== use== busca todas las rutas  intead get..
// TAMBIEN FUNCIONA PARA MUCHAS COSAS, EL APP.USE()-- ES EL MIDLEWARE.. .
// app.get("/", routes); // SOL USA LA RUTA PRINCIPAL.
app.use("/auth", Userroutes);

// ==========

// definir puerto.
const port = 9000;

app.listen(port, () => {
  console.log(`servidor en puerto ${port}`);
});
