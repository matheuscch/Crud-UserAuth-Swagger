import { Request,Response} from "express"
import { ListUserVisitsService } from "../services/ListUserVisitsSerivce"

class ListUserVisitsController {
    async handle(request:Request, response : Response) {
        const {user_id} = request
        console.log(user_id)
        const listUserVisitsService = new ListUserVisitsService()
        const visit = await listUserVisitsService.execute(user_id);
        response.json(visit)        
    }
}
export {ListUserVisitsController}