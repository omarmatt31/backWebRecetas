import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";
import generarJWT from "../helpers/generarJWT.js";

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
    const { nombreUsuario, email, password } = req.body;
    const saltos = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, saltos);
    const nuevoUsuario = new Usuario({
      nombreUsuario,
      email,
      password: passwordHash,
    });
    await nuevoUsuario.save();
    res.status(201).json({
      mensaje: `El usuario: ${nuevoUsuario.nombreUsuario} fue registrado exitosamente`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el usuario" });
  }
};

export const leerUsuarioPorId = async(req, res)=>{
    try{
        const usuarioBuscado = await Usuario.findById(req.params.id)
        if(!usuarioBuscado){
            return res.status(404).json({mensaje: 'Usuario no encontrado'})
        }
        res.status(200).json(usuarioBuscado)
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Error al obtener el usuario'})
    }
}

export const borrarUsuarioPorId = async(req, res)=>{
    try{
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id)
        if(!usuarioEliminado){
            return res.status(404).json({mensaje: 'Usuario no encontrado'})
        }
        res.status(200).json({mensaje: 'Usuario eliminado exitosamente'})
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Error al eliminar el usuario'})
    }
}

export const editarUsuarioPorId = async(req, res)=>{
    try{
        const usuarioModificado = await Usuario.findByIdAndUpdate(req.params.id, req.body)
        if(!usuarioModificado){
            return res.status(404).json({mensaje: 'Usuario no encontrado'})
        }
        res.status(200).json({mensaje: 'Usuario actualizado exitosamente'})
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Error al editar el usuario'})
    }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuarioExistente = await Usuario.findOne({ email });
    if (!usuarioExistente) {
      return res.status(404).json({ mensaje: "No se encontro el usuario" });
    }
    const passwordVerificado = bcrypt.compareSync(password, usuarioExistente.password);
    if (!passwordVerificado) {
      return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }
    const token = await generarJWT(usuarioExistente.nombreUsuario, usuarioExistente.email);
    res.status(200).json({
        mensaje: "Login exitoso",
        nombreUsuario: usuarioExistente.nombreUsuario,
        token: token,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al loguear el usuario" });
  }
};
