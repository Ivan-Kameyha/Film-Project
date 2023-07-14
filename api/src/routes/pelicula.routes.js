import { Router } from "express";
import { methods as peliculaController } from "../controllers/pelicula.controller";

const router = Router();

router.get("/", peliculaController.getPeliculas);
router.get("/:id", peliculaController.getOnePelicula);
router.post("/", peliculaController.addPelicula);
router.put("/:id", peliculaController.updatePelicula);
router.delete("/:id", peliculaController.deletePelicula);

export default router;