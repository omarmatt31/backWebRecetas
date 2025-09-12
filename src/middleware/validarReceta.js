import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Receta from "../models/receta.js";

const validacionReceta = [
  body("nombreReceta")
    .notEmpty()
    .withMessage("El nombre de la receta es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre de la receta debe tener entre 2 y 100 caracteres")
    .custom(async (valor, {req})=>{
      const recetaExistente = await Receta.findOne({nombreReceta: valor})
      if(!recetaExistente) return true
      if(req.params?.id && recetaExistente._id.toString() === req.params.id) return true
     
      throw new Error('Ya existe un producto con ese nombre')
    }),
  body("duracion")
    .notEmpty()
    .withMessage("La duración es un dato obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("La duración de la receta debe tener entre 2 y 100 caracteres"),
  body("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|webp)/)
    .withMessage(
      "La imagen debe ser una URL válida y debe terminar en .jpg, .jpeg, .png o .webp"
    ),
  body("descripcion")
    .notEmpty()
    .withMessage("La descripción es un dato obligatorio")
    .isLength({ min: 2, max: 300 })
    .withMessage("La descripción de la receta debe tener entre 2 y 300 caracteres"),
  body("porciones")
    .notEmpty()
    .withMessage("La cantidad de porciones es obligatoria")
    .isLength({ min: 2, max: 100 })
    .withMessage("La cantidad de porciones debe tener entre 2 y 100 caracteres"),
  body("ingredientes")
    .notEmpty()
    .withMessage("Los ingredientes son obligatorios")
    .isLength({ min: 10, max: 400 })
    .withMessage("La descripción de ingredientes debe tener entre 10 y 400 caracteres"),
  body("preparacion")
    .notEmpty()
    .withMessage("La preparación es obligatoria")
    .isLength({ min: 5, max: 1000 })
    .withMessage("La descripcion de la preparación debe tener entre 5 y 1000 caracteres"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionReceta;
