import mongoose from "mongoose"
const { Schema } = mongoose

const UserAdminSchema = new Schema({
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

module.exports = mongoose.model('UserAdmin', UserAdminSchema)