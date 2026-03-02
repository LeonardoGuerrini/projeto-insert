import express from 'express'
const router = express.Router()

import usuarioRoutes from './routes/usuario.route.js'

router.use('/usuario', usuarioRoutes)

export default router