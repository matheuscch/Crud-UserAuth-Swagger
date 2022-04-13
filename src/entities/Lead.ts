import {Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn, ManyToOne} from "typeorm";
import {v4 as uuid} from "uuid"
import { User } from "./User";

@Entity("leads")
class Lead {
    @PrimaryColumn()
    readonly id: string
    @Column()
    name:string
    @Column()
    email:string
    @Column()
    is_closed:boolean
    @ManyToOne(type=>User,user=>user.id)
    user_id: string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if(!this.id)
            this.id = uuid()
    }
}
export {Lead}