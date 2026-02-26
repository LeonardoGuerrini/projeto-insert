import { UserAdminRepository as userAdminRepo } from "../repositories/userAdmin.repository";

class UserAdminService {
    async buscarAdminPorId(_id){
        const admin = await userAdminRepo.buscarAdminPorId(_id)
        if(!admin) throw new Error("Nenhum usuário admin encontrado.");

        return admin
    }
    
    async criarAdmin(data){
        const { usuario, senha } = data
    }
}