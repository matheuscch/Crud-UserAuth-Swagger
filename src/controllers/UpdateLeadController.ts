import { Request,Response} from "express"
import { UpdateLeadService } from "../services/UpdateLeadService"

class UpdateLeadController {
    async handle(request:Request, response : Response) {
        const { id, email, name, is_closed } = request.body
        const updateLeadService = new UpdateLeadService()
        const lead = await updateLeadService.execute({ id, email, name, is_closed });
        response.json(lead)        
    }
}
export {UpdateLeadController}