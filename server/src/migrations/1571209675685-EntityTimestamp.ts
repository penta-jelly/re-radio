import { MigrationInterface, QueryRunner } from 'typeorm';

export class EntityTimestamp1571209675685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user_role" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedAt" SET DEFAULT now()`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP COLUMN "createdAt"`, undefined);
    }

}
