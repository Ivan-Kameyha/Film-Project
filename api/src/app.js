import express from "express";
import morgan from "morgan";
import cors from "cors";

// Routes
import peliculasRoutes from "./routes/pelicula.routes";

const app = express();

// Settings
app.set("port", 4000);
app.use(cors()); // politicas de seguridad

// Middlewares
app.use(morgan("dev")); // muestra en consola con detalle la peticion
app.use(express.json()); // para que el navegador pueda procesar un json

// Routes
app.use("/api/peliculas", peliculasRoutes);

export default app;