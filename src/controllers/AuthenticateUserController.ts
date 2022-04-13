import {Request,Response} from "express"
import { AuthenticateUserService } from "../services/AuthenticateUserService"

class AuthenticateUserController {
    async handle(request: Request,response:Response) {
        
        const {email,password} = request.body
        const authenticateUserService = new AuthenticateUserService()
       
        const token = await authenticateUserService.execute({
            email,
            password
        })
        
        if(!token) return response.status(400).json({
            error: "Email/Password invalid"
            })
        
        return response.json(token)
    }
}

export {AuthenticateUserController}