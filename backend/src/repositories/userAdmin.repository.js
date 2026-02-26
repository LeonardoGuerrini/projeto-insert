import { UserAdminSchema as UserAdmin } from "../models/userAdmin.model"

export class UserAdminRepository {
    async buscarAdminPorId(_id){
        return await UserAdmin.findById(_id)
    }

    async criarAdmin(data){
        return await UserAdmin.create(data)
    }

    async atualizarAdmin(_id){
        return await UserAdmin.findByIdAndUpdate(_id)
    }

    async deletarAdmin(_id){
        return await UserAdmin.findByIdAndDelete(_id)
    }
}