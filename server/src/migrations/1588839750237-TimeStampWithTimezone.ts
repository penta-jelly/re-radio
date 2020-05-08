import {MigrationInterface, QueryRunner} from "typeorm";

export class TimeStampWithTimezone1588839750237 implements MigrationInterface {
    name = 'TimeStampWithTimezone1588839750237'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "station" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "station" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "station" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "station" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "song" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "song" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "song" DROP COLUMN "startedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ADD "startedAt" TIMESTAMP WITH TIME ZONE`, undefined);
        await queryRunner.query(`ALTER TABLE "external_api_cache" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "external_api_cache" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "external_api_cache" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "external_api_cache" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "external_api_cache" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "external_api_cache" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "external_api_cache" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "external_api_cache" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "song" DROP COLUMN "startedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ADD "startedAt" TIMESTAMP`, undefined);
        await queryRunner.query(`ALTER TABLE "song" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "song" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "station" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "station" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "station" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "station" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
    }

}
