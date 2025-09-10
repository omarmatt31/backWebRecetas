import { Router } from "express";
import { crearReceta, leerRecetaPorId, leerRecetas, test } from "../controllers/recetas.controllers.js";

const router = Router();

router.route('/test').get(test)
router.route('/').get(leerRecetas).post(crearReceta)

export default router;