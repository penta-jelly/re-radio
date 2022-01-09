import { MigrationInterface, QueryRunner } from 'typeorm';

export class Station1571215410259 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "station" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "slug" character varying NOT NULL, "description" character varying, CONSTRAINT "UQ_0c4cf3382f77cddaf304687e95c" UNIQUE ("name"), CONSTRAINT "UQ_d0870ed0f60059c2bddee06ed2c" UNIQUE ("slug"), CONSTRAINT "PK_cad1b3e7182ef8df1057b82f6aa" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "station_tag" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_3805d1a0486f4687e9ef0863201" UNIQUE ("name"), CONSTRAINT "PK_a6e6883f89ac0dafbb4c7ac2a0c" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "station_tags_station_tag" ("stationId" integer NOT NULL, "stationTagId" integer NOT NULL, CONSTRAINT "PK_abf8872d182f59250af26485ada" PRIMARY KEY ("stationId", "stationTagId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_671e0aec30eed36be03012e958" ON "station_tags_station_tag" ("stationId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d787450f43dd6d2f9e16a630bb" ON "station_tags_station_tag" ("stationTagId") `, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD "stationId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "currentStationId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_99e544453c914bd51ba22ebd656" FOREIGN KEY ("stationId") REFERENCES "station"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_2f22f6a7900d1946ddda4a14e79" FOREIGN KEY ("currentStationId") REFERENCES "station"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "station_tags_station_tag" ADD CONSTRAINT "FK_671e0aec30eed36be03012e9586" FOREIGN KEY ("stationId") REFERENCES "station"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "station_tags_station_tag" ADD CONSTRAINT "FK_d787450f43dd6d2f9e16a630bb5" FOREIGN KEY ("stationTagId") REFERENCES "station_tag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "station_tags_station_tag" DROP CONSTRAINT "FK_d787450f43dd6d2f9e16a630bb5"`, undefined);
        await queryRunner.query(`ALTER TABLE "station_tags_station_tag" DROP CONSTRAINT "FK_671e0aec30eed36be03012e9586"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_2f22f6a7900d1946ddda4a14e79"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_99e544453c914bd51ba22ebd656"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "currentStationId"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_role" DROP COLUMN "stationId"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d787450f43dd6d2f9e16a630bb"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_671e0aec30eed36be03012e958"`, undefined);
        await queryRunner.query(`DROP TABLE "station_tags_station_tag"`, undefined);
        await queryRunner.query(`DROP TABLE "station_tag"`, undefined);
        await queryRunner.query(`DROP TABLE "station"`, undefined);
    }

}
