import mongoose from "mongoose"
const { Schema } = mongoose

export const UserAdminSchema = new Schema({
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
    }
})