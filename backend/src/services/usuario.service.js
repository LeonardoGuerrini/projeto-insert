import bcrypt from "bcrypt"
import { usuarioRepo } from "../repositories/usuario.repository.js";
import { generatedToken } from "../middlewares/token.middleware.js"

class UsuarioService {

    async buscarTodosUsuarios() {
        return await usuarioRepo.buscarTodosUsuarios()
    }

    async buscarUsuarioPorUsername(usuario) {
        const buscarUsuario = await usuarioRepo.buscarUsuarioPorUsername(usuario)
        if (!buscarUsuario) throw new Error("Nenhum usuário encontrado.");

        return buscarUsuario
    }

    async criarUsuario(data) {
        const { nome, usuario, email, senha, repeteSenha } = data
        if (!nome) throw new Error('Nome é obrigatório')
        if (!usuario) throw new Error('Usuário é obrigatório');
        if (!email) throw new Error('E-mail é obrigatório')
        if (!senha) throw new Error('Senha é obrigatória');
        if (!repeteSenha) throw new Error('É necessário repetir a senha para confirmação');

        if (senha.length < 6) throw new Error('A senha precisa ter 6 ou mais caracteres');

        if (senha !== repeteSenha) throw new Error('As senhas não coincidem');

        const usernameExistente = await usuarioRepo.buscarUsuarioPorUsername(usuario)
        if (usernameExistente) throw new Error('Esse nome de usuário já está em uso');

        const emailExistente = await usuarioRepo.buscarUsuarioPorEmail(email)
        if (emailExistente) throw new Error('Este e-mail já está em uso');

        const salt = await bcrypt.genSalt(10)
        const senhaCriptografada = await bcrypt.hash(senha, salt)

        return await usuarioRepo.criarUsuario({
            nome: nome,
            usuario: usuario,
            email: email,
            senha: senhaCriptografada
        })
    }

    async loginUsuario(usuario, senha) {
        const checkUsuario = await usuarioRepo.buscarUsuarioPorUsername(usuario)
        if(!checkUsuario) throw new Error('Usuário inexistente ou senha incorreta');

        const passwordMatch = await bcrypt.compare(senha, checkUsuario.senha || '')
        if(!passwordMatch) throw new Error('Usuário inexistente ou senha incorreta');


        const token = generatedToken(checkUsuario.id, checkUsuario.usuario)
        return { usuario: { id: checkUsuario.id , usuario: checkUsuario.usuario }, token }
        
    }

    async atualizarUsuario(id, data) {
        const { nome, email } = data

        const existeUsuario = await usuarioRepo.buscarUsuarioPorId(id)
        if (!existeUsuario) throw new Error('Usuário inexistente.');

        if (!nome) throw new Error('Nome é obrigatório');
        if (!email) throw new Error('E-mail é obrigatório');

        const emailExistente = await usuarioRepo.buscarUsuarioPorEmail(email)
        if (emailExistente && id !== emailExistente.id) throw new Error('Este e-mail já está em uso');

        return await usuarioRepo.atualizarUsuario({
            id,
            nome: nome,
            email: email
        })
    }

    async deletarUsuario(id) {
        const buscarUsuario = await usuarioRepo.buscarUsuarioPorId(id)
        if (!buscarUsuario) throw new Error('Usuário incorreto ou inexistente');

        return await usuarioRepo.deletarUsuario(id)

    }
}

export const usuarioService = new UsuarioService()