import {MigrationInterface, QueryRunner} from "typeorm";

export class seedCarAndClass1582124818114 implements MigrationInterface {
    name = 'seedCarAndClass1582124818114'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "class"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "amount"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "className" text NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "price" double precision NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "brand" text NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "model" text NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "picture" text NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "status" text NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "classNameId" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_81e820960d378335f91a2b3c03b" FOREIGN KEY ("classNameId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_81e820960d378335f91a2b3c03b"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "classNameId"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "status"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "picture"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "model"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "brand"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "price"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "className"`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "amount" double precision NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "classes" ADD "class" text NOT NULL`, undefined);
    }

}
