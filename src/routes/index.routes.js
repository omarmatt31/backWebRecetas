import usuarioRoutes from "../models/usuario.js";
import recetaRoutes from "./receta.routes.js";
import { Router } from "express";

const router = Router();

router.use('/recetas', recetaRoutes)
router.use('/usuarios', usuarioRoutes)

export default router;