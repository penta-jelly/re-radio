import {MigrationInterface, QueryRunner} from "typeorm";

export class ImproveCacheTable1587638028416 implements MigrationInterface {
    name = 'ImproveCacheTable1587638028416'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "song_cache" RENAME COLUMN "queryParts" TO "url"`, undefined);
        await queryRunner.query(`ALTER TABLE "song_cache" DROP COLUMN "songId"`, undefined);
        await queryRunner.query(`ALTER TABLE "song_cache" DROP COLUMN "songService"`, undefined);
        await queryRunner.query(`DROP TYPE "public"."song_cache_songservice_enum"`, undefined);
        await queryRunner.query(`ALTER TABLE "song_cache" RENAME TO "external_api_cache"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "external_api_cache" RENAME TO "song_cache"`, undefined);
        await queryRunner.query(`CREATE TYPE "public"."song_cache_songservice_enum" AS ENUM('youtube')`, undefined);
        await queryRunner.query(`ALTER TABLE "song_cache" ADD "songService" "song_cache_songservice_enum" NOT NULL DEFAULT 'youtube'`, undefined);
        await queryRunner.query(`ALTER TABLE "song_cache" ADD "songId" character varying NOT NULL DEFAULT ''`, undefined);
        await queryRunner.query(`ALTER TABLE "song_cache" RENAME COLUMN "url" TO "queryParts"`, undefined);
    }

}
