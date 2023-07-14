import { config } from "dotenv"; // pongo a disposicion las variables de entorno

config();

export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
};