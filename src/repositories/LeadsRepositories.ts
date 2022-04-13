import { EntityRepository, Repository } from "typeorm";
import {Lead} from "../entities/Lead"
@EntityRepository(Lead)
class LeadsRepositories extends Repository<Lead>{

}

export{LeadsRepositories}
