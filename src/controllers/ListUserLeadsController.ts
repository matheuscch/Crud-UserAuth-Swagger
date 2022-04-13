import { Request,Response} from "express"
import { ListLeadsService } from "../services/ListLeadsService"

class ListUserLeadsController {
    async handle(request:Request, response : Response) {
        const {user_id} = request
        console.log(user_id)
        const listLeadsService = new ListLeadsService()
        const leads = await listLeadsService.execute(user_id);
        response.json(leads)        
    }
}
export {ListUserLeadsController}