import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    minLength: 2,
    maxLenght: 100,
  },
  duracion: {
    type: String,
    required: true,
    minLength: 2,
    maxLenght: 100,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(
          valor
        );
      },
    },
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 2,
    maxLenght: 300,
  },
  porciones: {
    type: String,
    required: true,
    minLength: 2,
    maxLenght: 100,
  },
    ingredientes: {
    type: String,
    required: true,
    minLength: 10,
    maxLenght: 400,
  },
    preparacion: {
    type: String,
    required: true,
    minLength: 5,
    maxLenght: 1000,
  }
});

 

const Receta = mongoose.model("receta", recetaSchema);

export default Receta;