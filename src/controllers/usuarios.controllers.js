import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt"

export const leerUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find();
    res.status(200).json(listaUsuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los usuarios" });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const {nombreUsuario, email, password} = req.body
    const saltos = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password, saltos)
    const nuevoUsuario = new Usuario({nombreUsuario, email, password: passwordHash});
    await nuevoUsuario.save();
    res.status(201).json({
      mensaje: `El usuario: ${nuevoUsuario.nombreUsuario} fue registrado exitosamente`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el usuario" });
  }
};

