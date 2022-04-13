import { Request,Response} from "express"
import { DeleteLeadService } from "../services/DeleteLeadService"

class DeleteLeadController {
    async handle(request:Request, response : Response) {
        const { id, email, name } = request.body
        const deleteLeadService = new DeleteLeadService()
        await deleteLeadService.execute({ id, email, name });
        response.json({id})        
    }
}
export {DeleteLeadController}