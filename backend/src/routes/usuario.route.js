import express from 'express'
const router = express.Router()

import * as usuarioController from '../controllers/usuario.controller.js'

router.get('/v1/buscarTodos', usuarioController.buscarTodosUsuarios)
router.get('/v1/buscarUsuario', usuarioController.buscarUsuarioPorUsername)
router.post('/v1/criarUsuario', usuarioController.criarUsuario)
router.put('/v1/atualizarUsuario', usuarioController.atualizarUsuario)
router.delete('/v1/deletarUsuario/:id', usuarioController.deletarUsuario)

export default router