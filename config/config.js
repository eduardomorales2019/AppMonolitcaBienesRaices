// ESTA ES LA INSTANCIA DE LA BASE DATPS !!! DB.-----

import { Sequelize } from "sequelize";

// MUY IMPORTANTE  PONER ESTO PARA PODER VER VARIABLES DE ENTORNO !
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

// indtancia para conectar la bd para conecatr datos.
const db = new Sequelize(
  process.env.NAME_BS,
  process.env.BD_USER,
  process.env.MYSQL,
  {
    host: process.env.BD_HOST,
    port: 3306,
    dialect: "mysql",
    define: {
      timestamps: true,
    },
    // configura el proceso de conexion de base datos, comportamiento de conexione nuevas y existentes..-- en caso que haya alguna activa no se cree otra vez. , 30 seg de hacer la conexion antes de marcar el errror y 10 seg en ver que si no hay nadie utiiando y se fionlice la conexion.
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    //
    operatorAliases: false,
  }
);

export default db;
