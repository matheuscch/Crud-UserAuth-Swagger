import { getCustomRepository } from "typeorm"
import { LeadsRepositories } from "../repositories/LeadsRepositories"

interface ILeadRequest {
    id: string,
    email: string,    
    name:string,
}

class DeleteLeadService {
    async execute({id,email,name} : ILeadRequest){
        const leadsRepository = getCustomRepository(LeadsRepositories)
        
        const lead = await leadsRepository.findOne({
            where: {
                id
            }
        })
        console.log(lead)
        await leadsRepository.remove(lead)
        return lead
    }
}
export {DeleteLeadService}