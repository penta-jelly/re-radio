import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTable1571051450727 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "email" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying, "country" character varying, "city" character varying, "bio" character varying, "avatarUrl" character varying, "coverUrl" character varying, "reputation" integer DEFAULT 0, "facebookId" character varying, "googleId" character varying, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
