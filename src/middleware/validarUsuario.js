import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js"

const validacionUsuario = [
  body("nombreUsuario")
    .notEmpty()
    .withMessage("El nombre del usuario es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del usuario debe tener entre 2 y 100 caracteres"),
  body("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio")
    .isEmail()
    .withMessage("El email debe tener un formato válido"),
  body('password')
    .notEmpty()
    .withMessage("La contraseña es un dato obligatorio")
    .isLength({ min: 8, max: 16 })
    .withMessage("La contraseña debe tener entre 8 y 16 caracteres")
    .matches( /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/)
    .withMessage("La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
