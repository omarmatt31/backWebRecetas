import { Router } from "express";
import { crearReceta, leerRecetaPorId, test } from "../controllers/recetas.controllers.js";

const router = Router();

router.route('/test').get(test)
router.route('/').get(leerRecetaPorId).post(crearReceta)

export default router;