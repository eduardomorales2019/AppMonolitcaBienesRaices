// las clases can en Mayusculapor Convencion. .-

import { DataTypes } from "sequelize";
// import db from "../config/config";

import db from "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/config/config.js";

const Usuario = db.define("usuarios", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING, allowNull: false },
  token: DataTypes.STRING, // cuando es solo 1
  confirmado: DataTypes.BOOLEAN,
});

export default Usuario;
