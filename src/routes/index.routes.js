import usuarioRoutes from "./usuarios.routes.js"
import recetaRoutes from "./receta.routes.js";
import { Router } from "express";

const router = Router();

router.use('/recetas', recetaRoutes)
router.use('/usuarios', usuarioRoutes)

export default router;