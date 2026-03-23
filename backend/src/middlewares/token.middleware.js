import jwt from "jsonwebtoken"

export const generatedToken = (id, usuario) => {
    const key = process.env.JWT_SECRET

    if(typeof key !== 'string' || key.length === 0) throw new Error('JWT inválido')

    const token = jwt.sign(
        { id, usuario },
        key,
        { expiresIn: process.env.JWT_EXPIRES }
    )
    return token
}