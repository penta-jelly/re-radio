// prettier-ignore
import { MigrationInterface, QueryRunner } from "typeorm";

export class OnlineUsers1573101970989 implements MigrationInterface {
    name = 'OnlineUsers1573101970989'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_2f22f6a7900d1946ddda4a14e79"`, undefined);
        await queryRunner.query(`ALTER TABLE "station" ADD "onlineUserIds" integer array NOT NULL DEFAULT '{}'::int[]`, undefined);
        await queryRunner.query(`ALTER TABLE "song" DROP COLUMN "upVoteUserIds"`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ADD "upVoteUserIds" integer array NOT NULL DEFAULT '{}'::int[]`, undefined);
        await queryRunner.query(`ALTER TABLE "song" DROP COLUMN "downVoteUserIds"`, undefined);  
        await queryRunner.query(`ALTER TABLE "song" ADD "downVoteUserIds" integer array NOT NULL DEFAULT '{}'::int[]`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "reputation" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ALTER COLUMN "startedAt" SET DEFAULT null`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "song" ALTER COLUMN "startedAt" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "reputation" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "song" DROP COLUMN "downVoteUserIds"`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ADD COLUMN "downVoteUserIds" text NOT NULL DEFAULT ''`, undefined);
        await queryRunner.query(`ALTER TABLE "song" DROP COLUMN "upVoteUserIds"`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ADD COLUMN "upVoteUserIds" text NOT NULL DEFAULT ''`, undefined);
        await queryRunner.query(`ALTER TABLE "station" DROP COLUMN "onlineUserIds"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_2f22f6a7900d1946ddda4a14e79" FOREIGN KEY ("currentStationId") REFERENCES "station"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
