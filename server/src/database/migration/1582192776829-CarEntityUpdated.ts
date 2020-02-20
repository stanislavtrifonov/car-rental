import {MigrationInterface, QueryRunner} from "typeorm";

export class CarEntityUpdated1582192776829 implements MigrationInterface {
    name = 'CarEntityUpdated1582192776829'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "cars" RENAME COLUMN "status" TO "isBorrowed"`, undefined);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "isBorrowed"`, undefined);
        await queryRunner.query(`ALTER TABLE "cars" ADD "isBorrowed" boolean NOT NULL DEFAULT false`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "isBorrowed"`, undefined);
        await queryRunner.query(`ALTER TABLE "cars" ADD "isBorrowed" text NOT NULL DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "cars" RENAME COLUMN "isBorrowed" TO "status"`, undefined);
    }

}
