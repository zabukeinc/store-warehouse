import { Sequelize } from "sequelize";

const dbName: string = "db_eigen_storeware";
const dbUser: string = "root";
const dbPass: string = "";
const dbHost: string = "localhost";

export const db = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: "mysql",
});
