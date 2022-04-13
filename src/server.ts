import express,{Request,Response,NextFunction} from "express"
import "express-async-errors"
import "reflect-metadata"
import "./database"
import {router} from "./routes"
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
let bodyParser = require('body-parser');
var cors = require('cors');
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
// Add headers before the routes are defined
app.use(function (req, res : Response, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, OPTIONS');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Content-Type", "application/json")
    // Pass to next layer of middleware
    next();
});
  
app.use(express.json())



app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocument))     
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
  
app.use(router)    
app.listen(3000,()=>
console.log("Running...") 
)     