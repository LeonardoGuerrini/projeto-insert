import bcrypt from "bcrypt"
import { usuarioRepo } from "../repositories/usuario.repository.js";

class UsuarioService {
    
    async buscarTodosUsuarios(){
        return await usuarioRepo.buscarTodosUsuarios()
    }
    
    async buscarUsuarioPorUsername(usuario){
        const buscarUsuario = await usuarioRepo.buscarUsuarioPorUsername(usuario)
        if(!buscarUsuario) throw new Error("Nenhum usuário encontrado.");

        return buscarUsuario
    }
    
    async criarUsuario(data){
        const { nome, usuario, email, senha, repeteSenha } = data
        if(!nome) throw new Error('Nome é obrigatório')
        if(!usuario) throw new Error('Usuário é obrigatório');
        if(!email) throw new Error('E-mail é obrigatório')
        if(!senha) throw new Error('Senha é obrigatória');
        if(!repeteSenha) throw new Error('É necessário repetir a senha para confirmação');

        if(senha.length < 6) throw new Error('A senha precisa ter 6 ou mais caracteres');

        if(senha !== repeteSenha) throw new Error('As senhas não coincidem');

        const usernameExistente = await usuarioRepo.buscarUsuarioPorUsername(usuario)
        if(usernameExistente) throw new Error('Esse nome de usuário já está em uso');

        const emailExistente = await usuarioRepo.buscarUsuarioPorEmail(email)
        if(emailExistente) throw new Error('Este e-mail já está em uso');

        const salt = await bcrypt.genSalt(10)
        const senhaCriptografada = await bcrypt.hash(senha, salt)

        return await usuarioRepo.criarUsuario({
            nome: nome,
            usuario: usuario,
            email: email,
            senha: senhaCriptografada
        })
    }

    async atualizarUsuario(usuario, data){
        const { nome, email, senha, repeteSenha } = data

        // verificar se o usuário que foi passado realmente existe
        // const existeUsuario = await usuarioRepo.buscarUsuarioPorUsername(usuario)
        // if(!existeUsuario) throw new Error('Usuário inexistente.')

        if(!nome) throw new Error('Nome é obrigatório')
        if(!email) throw new Error('E-mail é obrigatório')
        if(!senha) throw new Error('Senha é obrigatória');
        if(!repeteSenha) throw new Error('É necessário repetir a senha para confirmação');

        const emailExistente = await usuarioRepo.buscarUsuarioPorEmail(email)
        if(email === emailExistente) throw new Error('Este e-mail já está em uso');

        if(senha.length < 6) throw new Error('A senha precisa ter 6 ou mais caracteres');
        if(senha !== repeteSenha) throw new Error('As senhas não coincidem');

        const contaUsuario = await usuarioRepo.buscarUsuarioPorUsername(usuario)
        const comparacaoSenha = await bcrypt.compare(senha, contaUsuario.senha)
        if(!comparacaoSenha) throw new Error('A senha digitada é a que está sendo utilizada atualmente');

        const salt = await bcrypt.genSalt(10)
        const senhaCriptografada = await bcrypt.hash(senha, salt)

        return await usuarioRepo.criarUsuario({
            nome: nome,
            email: email,
            senha: senhaCriptografada
        })

    }

    async deletarUsuario(id){
        const buscarUsuario = await usuarioRepo.buscarUsuarioPorId(id)
        if(!buscarUsuario) throw new Error('Usuário incorreto ou inexistente');

        return await usuarioRepo.deletarUsuario(id)

    }
}

export const usuarioService = new UsuarioService()