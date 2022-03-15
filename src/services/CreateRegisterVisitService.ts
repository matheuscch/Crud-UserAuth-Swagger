import { getCustomRepository } from "typeorm"
import { VisitsRepositories } from "../repositories/VisitsRepositories"
import { UserRepositories } from "../repositories/UsersRepositories"

interface IVisitRequest {
    email: string,
    isValid:boolean,
    name:string,
}

class CreateRegisterVisitService {
    async execute({email,isValid,name} : IVisitRequest){
        const visitsRepository = getCustomRepository(VisitsRepositories)
        const userRepositories = getCustomRepository(UserRepositories)
        const user = await userRepositories.findOne({email})
        
        const visit = visitsRepository.create({
            user : user.id,
            isValid,
            name
        })
        await visitsRepository.save(visit)
        return visit
    }
}
export {CreateRegisterVisitService}