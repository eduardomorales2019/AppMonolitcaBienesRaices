// las clases can en Mayusculapor Convencion. .-

import bcrypt from "bcrypt";

import { DataTypes } from "sequelize";
// import db from "../config/config";

import db from "/Users/eduardomorales/Documents/JuanPabloDelaTorreMERNProyect/config/config.js";
// ==================================== DEFINOS NUESTRA TABLA==============================
const Usuario = db.define(
  "usuarios",
  {
    nombre: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING, allowNull: false },
    token: DataTypes.STRING, // cuando es solo 1
    confirmado: DataTypes.BOOLEAN,
  },
  {
    // AQUI INTERCEPTAMOS LA CONTRASEÑA ANTES DE SU CREACION.-- Y SE PONE EL HOOK..-
    hooks: {
      beforeCreate: async function (usuario) {
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(usuario.password, salt);
      },
    },
  }
);

export default Usuario;
