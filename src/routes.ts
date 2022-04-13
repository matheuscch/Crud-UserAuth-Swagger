import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController"
import { CreateRegisterVisitController } from "./controllers/CreateRegisterVisitController";
import { CreateRegisterLeadController } from "./controllers/CreateRegisterLeadController";


import {ensureAdmin} from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserVisitsController } from "./controllers/ListUserVisitsController";
import { ListUserLeadsController } from "./controllers/ListUserLeadsController";
import { UpdateLeadController } from "./controllers/UpdateLeadController";
import { DeleteLeadController } from "./controllers/DeleteLeadController";

const router = Router();
const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

const createRegisterVisitController = new CreateRegisterVisitController()
const listUserVisitsController = new ListUserVisitsController()

const createRegisterLeadController = new CreateRegisterLeadController()
const listUserLeadsController = new ListUserLeadsController()
const updateLeadController = new UpdateLeadController()
const deleteLeadController = new DeleteLeadController()

router.post("/users", createUserController.handle)
router.post("/login",authenticateUserController.handle)
router.post("/visit",ensureAuthenticated, ensureAdmin, createRegisterVisitController.handle)
router.get("/user/visit",ensureAuthenticated,listUserVisitsController.handle)

router.post("/lead",ensureAuthenticated,createRegisterLeadController.handle)
router.get("/user/leads",ensureAuthenticated,listUserLeadsController.handle)
router.put("/lead/update",ensureAuthenticated,updateLeadController.handle)
router.delete("/lead/delete",ensureAuthenticated,deleteLeadController.handle)

export {router}