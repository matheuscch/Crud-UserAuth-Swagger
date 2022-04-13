import express,{Request,Response,NextFunction} from "express"
import "express-async-errors"
import "reflect-metadata"
import "./database"
import swaggerUi from "swagger-ui-express"
import {router} from "./routes"
import swaggerDocs from "./swagger.json"
const app = express()
app.use(express.json())
app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))
app.use((err: Error, request: Request , response : Response,next:NextFunction)=> {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
            })
        }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
            })
    })

    app.get("/terms", (request,response) =>{
        return response.json({
            message:"Termos de Serviço",
        })
    })
app.use("/api",router)
app.listen(3000,()=>console.log("Running"))