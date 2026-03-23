import jwt from "jsonwebtoken"

export function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const secret = process.env.JWT_SECRET

    if (!secret) {
        return res.status(500).json({ message: 'JWT_SECRET não definido' })
    }

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Bearer token ausente ou inválido" })
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, secret)
        req.user = {
            id: decoded.id,
            usuario: decoded.usuario
        }

        next()
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido ou expirado' })
    }

}