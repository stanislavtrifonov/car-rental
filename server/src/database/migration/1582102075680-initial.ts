import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1582102075680 implements MigrationInterface {
    name = 'initial1582102075680'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "classes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "class" text NOT NULL, "amount" double precision NOT NULL, "isDeleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "classes"`, undefined);
    }

}
