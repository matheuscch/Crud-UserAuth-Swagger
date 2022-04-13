import {Request,Response} from "express"
import { CreateUserService} from "../services/CreateUserService"
class CreateUserController {
    
    async handle(request: Request , response : Response) {
            const { name, email, admin , password} = request.body;
            const createUserService = new CreateUserService();
            try {
                const user = await createUserService.execute({name,email,admin,password})
                return response.json(user)
            }
            catch(err){
                    return response.status(400).json({
                        error: err.message
                        })
            }
    }
}
export {CreateUserController}