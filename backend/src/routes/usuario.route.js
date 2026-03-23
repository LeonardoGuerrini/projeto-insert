import express from 'express'
import { verifyToken } from '../middlewares/auth.middleware.js'
const router = express.Router()

import * as usuarioController from '../controllers/usuario.controller.js'

router.get('/v1/buscarTodos', verifyToken, usuarioController.buscarTodosUsuarios)
router.get('/v1/buscarUsuario', verifyToken, usuarioController.buscarUsuarioPorUsername)
router.post('/v1/criarUsuario', usuarioController.criarUsuario)
router.post('/v1/loginUsuario', usuarioController.loginUsuario)
router.put('/v1/atualizarUsuario', verifyToken, usuarioController.atualizarUsuario)
router.delete('/v1/deletarUsuario/:id', verifyToken, usuarioController.deletarUsuario)

export default router