import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"
import { VisitsRepositories } from "../repositories/VisitsRepositories"

class ListUserVisitsService {
    async execute(user_id: string) {
        const visitsRepositories = getCustomRepository(VisitsRepositories)
        const visits = await visitsRepositories.find({
           where: {
                isValid:true,
               user:user_id
           }
        })
        return visits
    }    
}
export {ListUserVisitsService}