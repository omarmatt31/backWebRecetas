import { Router } from "express";
import {
  leerUsuarios,
  crearUsuario,
} from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../middleware/validarUsuario.js";
import { login } from "../controllers/usuarios.controllers.js";

const router = Router();
router.route("/").get(leerUsuarios).post(validacionUsuario, crearUsuario);
router.route("/login").post(login)
export default router;