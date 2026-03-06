import jwt from "jsonwebtoken"

export async function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization']
    const secret = process.env.JWT_SECRET

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Bearer token ausente ou inválido" })
    }

    const token = authHeader && authHeader.split(' ')[1]

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token inválido ou expirado" })
        }
        req.user = decoded
        next()
    })
}