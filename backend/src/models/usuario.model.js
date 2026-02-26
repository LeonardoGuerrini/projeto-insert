import mongoose from "mongoose"
const { Schema } = mongoose

export const UsuarioSchema = new Schema({
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
    },
    repeteSenha: {
        type: String,
        required: true
    }
})