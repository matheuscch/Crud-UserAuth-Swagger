import {Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn, ManyToOne} from "typeorm";
import {v4 as uuid} from "uuid"
import { User } from "./User";


@Entity("visits")
export class Visit {
    @PrimaryColumn()
    readonly id: string
    @ManyToOne(type=>User,user=>user.id)
    user: string
    @Column()
    isValid:boolean
    @Column()
    name:string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at:Date

    constructor() {
        if(!this.id)
            this.id = uuid()
    }
}
