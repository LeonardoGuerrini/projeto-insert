import { usuarioService } from '../services/usuario.service.js'

export const buscarTodosUsuarios = async (req, res) => {
    try{
        const usuarios = await usuarioService.buscarTodosUsuarios()
        res.status(200).json(usuarios)
    } catch(err){
        console.log('Erro ao buscar usuários:', err)
        res.status(400).json({ message: "Erro ao buscar usuários." })
    }
}

export const buscarUsuarioPorUsername = async (req, res) => {
    try{
        const usuarios = await usuarioService.buscarUsuarioPorUsername(req.body.usuario)
        res.status(200).json(usuarios)
    } catch(err){
        console.log('Erro ao buscar usuário:', err)
        res.status(400).json({ message: "Erro ao buscar usuário." })
    }
}

export const criarUsuario = async (req, res) => {
    try{
        const novoUsuario = await usuarioService.criarUsuario(req.body)
        res.status(201).json({ message: "Usuário criado com sucesso!", usuario:  novoUsuario})
    } catch(err){
        console.log('Erro ao criar usuário:', err)
        res.status(400).json({ message: "Erro ao criar usuário." })
    }
}

export const atualizarUsuario = async (req, res) => {
    try{
        const atualizar = await usuarioService.criarUsuario(req.body)
        res.status(201).json({ message: "Usuário editado com sucesso!" })
    } catch(err){
        console.log('Erro ao editar usuário:', err)
        res.status(400).json({ message: "Erro ao editar usuário." })
    }
}

export const deletarUsuario = async (req, res) => {
    try{
        await usuarioService.deletarUsuario(req.params.id)
        res.status(200).json({ message: "Usuário deletado com sucesso!" })
    } catch(err){
        console.log('Erro ao deletar usuário:', err)
        res.status(400).json({ message: "Erro ao deletar usuário." })
    }
}