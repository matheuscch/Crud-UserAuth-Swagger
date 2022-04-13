import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddUserVisit1647042350116 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"visits",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true,
                    },
                    {
                        name:"user_id",
                        type:"uuid",

                    },
                    {   name:"name",
                        type:"varchar"

                    },           
                    {
                        name:"isValid",
                        type:"boolean"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()"
                    }                
                ],
                foreignKeys: [
                    {
                      name: "providerUser",
                      referencedTableName: "users",
                      referencedColumnNames: ["id"],
                      columnNames: ["user_id"],
                      onDelete: "CASCADE",
                      onUpdate: "CASCADE"
                    }
                  ]
            })
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("visits");
    }

}
