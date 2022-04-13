import { getCustomRepository } from "typeorm"
import { LeadsRepositories } from "../repositories/LeadsRepositories"

interface ILeadRequest {
    email: string,    
    name:string,
    is_closed: boolean,
    user_id: string
}

class RegisterLeadService {
    async execute({email,name,is_closed,user_id} : ILeadRequest){
        const leadsRepository = getCustomRepository(LeadsRepositories)
   
        
        const lead = leadsRepository.create({
            email,
            name,
            is_closed,
            user_id
        })
        
        await leadsRepository.save(lead)
        return lead
    }
}
export {RegisterLeadService}