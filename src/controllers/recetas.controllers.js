import Receta from "../models/receta.js"

export const test = (req, res)=>{
    res.status(200)
    res.send('Primera prueba desde el backend')
}

export const leerRecetas =async(req, res)=>{
    try{
        const listaRecetas = await Receta.find()
        res.status(200).json(listaRecetas)
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Error al leer la receta'})
    }
}

export const crearReceta = async(req, res)=>{
    try{
        const nuevaReceta = new Receta(req.body);
        await nuevaReceta.save();
        res.status(201).json({mensaje: 'La receta fue creada exitosamente'})
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje: 'Error al crear la receta'})
    }
}

export const leerRecetaPorId = async(req, res)=>{

}

export const borrarRecetaPorId = async(req, res)=>{
    
}

export const editarRecetaPorId = async(req, res)=>{
    
}