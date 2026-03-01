import 'dotenv/config'
import express from "express"
import connectDB from './src/config/db.js'
import routes from './src/routes.js'

import { setServers } from "node:dns/promises";

setServers(["1.1.1.1", "8.8.8.8"]);

const app = express()
const PORT = process.env.PORT

connectDB()

app.use(express.json())

app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
})