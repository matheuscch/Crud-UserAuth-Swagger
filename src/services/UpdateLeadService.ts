import { getCustomRepository } from "typeorm"
import { LeadsRepositories } from "../repositories/LeadsRepositories"

interface ILeadRequest {
    id: string,
    email: string,    
    name:string,
    is_closed: boolean,
}

class UpdateLeadService {
    async execute({id,email,name,is_closed} : ILeadRequest){
        const leadsRepository = getCustomRepository(LeadsRepositories)
        
        const lead = await leadsRepository.findOne({
            where: {
                id
            }
        })

        lead.name = name
        lead.email = email
        lead.is_closed = is_closed

        await leadsRepository.save(lead)
        return lead
    }
}
export {UpdateLeadService}