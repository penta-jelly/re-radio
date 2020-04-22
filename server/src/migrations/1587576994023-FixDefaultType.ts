import {MigrationInterface, QueryRunner} from "typeorm";

export class FixDefaultType1587576994023 implements MigrationInterface {
    name = 'FixDefaultType1587576994023'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "station" ALTER COLUMN "onlineUserIds" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ALTER COLUMN "upVoteUserIds" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ALTER COLUMN "downVoteUserIds" DROP DEFAULT`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "song" ALTER COLUMN "downVoteUserIds" SET DEFAULT '{}'`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ALTER COLUMN "upVoteUserIds" SET DEFAULT '{}'`, undefined);
        await queryRunner.query(`ALTER TABLE "station" ALTER COLUMN "onlineUserIds" SET DEFAULT '{}'`, undefined);
    }

}
