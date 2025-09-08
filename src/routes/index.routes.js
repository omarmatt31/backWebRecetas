import recetaRoute from "./receta.routes.js";
import { Router } from "express";

const router = Router();

router.use('/recetas', recetaRoute)

export default router;