import { MigrationInterface, QueryRunner } from 'typeorm';

export class RealtimeRadio1572257136000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "station" ADD "playingSongId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "station" ADD CONSTRAINT "UQ_740cb890921992ffabce5ff0bc4" UNIQUE ("playingSongId")`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ALTER COLUMN "startedAt" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "station" ADD CONSTRAINT "FK_740cb890921992ffabce5ff0bc4" FOREIGN KEY ("playingSongId") REFERENCES "song"("id") ON DELETE SET NULL ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "station" DROP CONSTRAINT "FK_740cb890921992ffabce5ff0bc4"`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ALTER COLUMN "startedAt" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "station" DROP CONSTRAINT "UQ_740cb890921992ffabce5ff0bc4"`, undefined);
        await queryRunner.query(`ALTER TABLE "station" DROP COLUMN "playingSongId"`, undefined);
    }

}
