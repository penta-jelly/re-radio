import {MigrationInterface, QueryRunner} from "typeorm";

export class SongCache1587577008957 implements MigrationInterface {
    name = 'SongCache1587577008957'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "song_cache_songservice_enum" AS ENUM('youtube')`, undefined);
        await queryRunner.query(`CREATE TABLE "song_cache" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "songId" character varying NOT NULL, "songService" "song_cache_songservice_enum" NOT NULL DEFAULT 'youtube', "queryParts" character varying NOT NULL, "data" text NOT NULL, CONSTRAINT "PK_0a57913642ddf234b06653c360e" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "song_cache"`, undefined);
        await queryRunner.query(`DROP TYPE "song_cache_songservice_enum"`, undefined);
    }

}
