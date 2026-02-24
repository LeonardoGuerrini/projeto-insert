import 'dotenv/config'
import express from "express"
import connectDB from './config/db.js'
import { setServers } from "node:dns/promises";

setServers(["1.1.1.1", "8.8.8.8"]);

const app = express()
const PORT = process.env.PORT

connectDB()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
}) // rota de teste

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
})