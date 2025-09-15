import { Router } from "express";
import { borrarRecetaPorId, crearReceta, editarRecetaPorId, leerRecetaPorId, leerRecetas, test } from "../controllers/recetas.controllers.js";
import validacionReceta from "../middleware/validarReceta.js";
import verificarJWT from "../middleware/verificarJWT.js";

const router = Router();

router.route('/test').get(test)
router.route('/').get(leerRecetas).post([verificarJWT, validacionReceta], crearReceta)
router.route('/:id').get(leerRecetaPorId).delete(verificarJWT, borrarRecetaPorId).put([verificarJWT,validacionReceta], editarRecetaPorId)

export default router;