import {Request,Response,NextFunction} from "express"
import { verify } from "jsonwebtoken"
interface IPayload {
    sub: string
}
export function ensureAuthenticated(
    request:Request,
    response:Response,
    next: NextFunction,
) {
    const authToken = request.headers.authorization
    if(!authToken) return response.status(401).end()
    const [,token] = authToken.split(" ")
    try{
        const {sub} = verify(token,"337c5d8fc5a580f417e87b1171fbb2a1") as IPayload
        request.user_id = sub
        next()
    } catch(err) {
        response.status(401).end()
    }
}