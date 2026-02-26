import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI)
        console.log("Conectado ao MongoDB.")
    } catch (error) {
        console.error("Erro ao conectar com o MongoDB:", error)
        process.exit(1)
    }
}

export default connectDB