import jwt from "jsonwebtoken"
import { Usuario } from "../models/usuario.model"

export async function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    const secret = process.env.JWT_SECRET

    if(!token) {
        return res.status(401).json({ message: "Token ausente" })
    }

    jwt.verify(token, secret, (err, decoded) => {
        if(err){
            return res.status(403).json({ message: "Token inválido ou expirado" })
        }
    })

    req.user = decoded
    next()
}