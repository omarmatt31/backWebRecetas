import { Router } from "express";
import { borrarRecetaPorId, crearReceta, editarRecetaPorId, leerRecetaPorId, leerRecetas, test } from "../controllers/recetas.controllers.js";

const router = Router();

router.route('/test').get(test)
router.route('/').get(leerRecetas).post(crearReceta)
router.route('/:id').get(leerRecetaPorId).delete(borrarRecetaPorId).put(editarRecetaPorId)

export default router;