import {MigrationInterface, QueryRunner} from "typeorm";

export class fixedCarEntityName1582125022714 implements MigrationInterface {
    name = 'fixedCarEntityName1582125022714'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_81e820960d378335f91a2b3c03b"`, undefined);
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" text NOT NULL, "model" text NOT NULL, "picture" text NOT NULL, "status" text NOT NULL, "isDeleted" boolean NOT NULL DEFAULT false, "classNameId" uuid, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "brand"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "model"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "picture"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "status"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "classNameId"`, undefined);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_cce8059f6dc6df9fd9d86b22e01" FOREIGN KEY ("classNameId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_cce8059f6dc6df9fd9d86b22e01"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "classNameId" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "status" text NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "picture" text NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "model" text NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "brand" text NOT NULL`, undefined);
        await queryRunner.query(`DROP TABLE "cars"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_81e820960d378335f91a2b3c03b" FOREIGN KEY ("classNameId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
