import { EntityRepository, Repository } from "typeorm";
import {Visit} from "../entities/Visit"
@EntityRepository(Visit)
class VisitsRepositories extends Repository<Visit>{

}
export{VisitsRepositories}
