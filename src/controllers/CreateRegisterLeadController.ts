import {Request,Response} from "express"
import { RegisterLeadService } from "../services/RegisterLeadService"

class CreateRegisterLeadController {
    async handle(request: Request , response : Response) {
        const { email,name,is_closed} = request.body;
        const {user_id} = request
        const registerleadService = new RegisterLeadService();
        const lead = await registerleadService.execute({email,name,is_closed,user_id})
        return response.json(lead)
    }
}
export {CreateRegisterLeadController}