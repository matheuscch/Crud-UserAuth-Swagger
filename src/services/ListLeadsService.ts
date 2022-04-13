import { getCustomRepository } from "typeorm"
import { LeadsRepositories } from "../repositories/LeadsRepositories"

class ListLeadsService {
    async execute(user_id: string) {
        const leadsRepositories = getCustomRepository(LeadsRepositories)
        
        const leads = await leadsRepositories.find({
           where: {
               user_id:user_id
           }
        })
        
        return leads
    }    
}
export {ListLeadsService}