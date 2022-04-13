import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLeads1649776218372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"leads",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true,
                    },
                    {   name:"name",
                        type:"varchar"

                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name: "is_closed",
                        type:"boolean",
                        default:false
                    },
                    {
                        name:"user_id",
                        type:"uuid"
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()"
                    }                
                ], foreignKeys: [
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
        await queryRunner.dropTable("leads");
    }

}
