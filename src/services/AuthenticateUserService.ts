import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface IAuthenticateRequest{
    email: string
    password: string
}

class AuthenticateUserService{
    async execute({email,password}: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UserRepositories)
        
        const user = await userRepositories.findOne({
            email
        })
        
        if(!user) {
            throw new Error("Email/Password incorrect")
        }
        
        const passwordMatch = await compare(password,user.password)
        if(!passwordMatch) {
        throw new Error("Email/Password incorrect")
        }

        const token = sign({
            email: user.email,

        },"337c5d8fc5a580f417e87b1171fbb2a1" , {  //userauthservice
            subject: user.id,
            expiresIn:"1d"
        })         
        
        return token   
    }

}

export {AuthenticateUserService}