import {Request,Response} from "express"
import { CreateRegisterVisitService } from "../services/CreateRegisterVisitService"

class CreateRegisterVisitController {
    async handle(request: Request , response : Response) {
        const { email, isValid, name } = request.body;
        const createRegisterVisitService = new CreateRegisterVisitService();
        const visit = await createRegisterVisitService.execute({email,isValid,name})
        return response.json(visit)
    }
}
export {CreateRegisterVisitController}