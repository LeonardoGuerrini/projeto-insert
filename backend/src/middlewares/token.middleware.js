import jwt from "jsonwebtoken"

export const generateToken = (id, usuario) => {
    const key = process.env.JWT_SECRET

    if(typeof key !== 'string' || key.length === 0) throw new Error('JWT inválido')

    const token = jwt.sign(
        { id, usuario },
        key,
        { expiresIn: '1d' }
    )
    return token
}