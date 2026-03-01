import mongoose from "mongoose"
const { Schema } = mongoose

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
    }
})

export const Usuario = mongoose.model("Usuario", UsuarioSchema);