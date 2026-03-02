import { Usuario } from "../models/usuario.model.js"

class UsuarioRepository {

    async buscarTodosUsuarios(){
        return await Usuario.find()
    }

    async buscarUsuarioPorId(_id){
        return await Usuario.findById(_id)
    }

    async buscarUsuarioPorUsername(usuario){
        return await Usuario.findOne({ usuario })
    }

    async buscarUsuarioPorEmail(email){
        return await Usuario.findOne({ email })
    }

    async criarUsuario(data){
        return await Usuario.create(data)
    }

    async atualizarUsuario(_id){
        return await Usuario.findByIdAndUpdate(_id)
    }

    async deletarUsuario(_id){
        return await Usuario.findByIdAndDelete(_id)
    }
}

export const usuarioRepo = new UsuarioRepository()