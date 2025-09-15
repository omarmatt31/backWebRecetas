import { Router } from "express";
import {
  leerUsuarios,
  crearUsuario,
} from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../middleware/validarUsuario.js";
import { login } from "../controllers/usuarios.controllers.js";
import { leerUsuarioPorId } from "../controllers/usuarios.controllers.js";
import { borrarUsuarioPorId } from "../controllers/usuarios.controllers.js";
import { editarUsuarioPorId } from "../controllers/usuarios.controllers.js";
import verificarJWT from "../middleware/verificarJWT.js";

const router = Router();
router.route("/").get(leerUsuarios).post([verificarJWT, validacionUsuario], crearUsuario);
router.route("/login").post(login)
router.route('/:id').get(leerUsuarioPorId).delete(verificarJWT, borrarUsuarioPorId).put([verificarJWT, validacionUsuario], editarUsuarioPorId)
export default router;