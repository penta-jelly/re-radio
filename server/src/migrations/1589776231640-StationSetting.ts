import {MigrationInterface, QueryRunner} from "typeorm";

export class StationSetting1589776231640 implements MigrationInterface {
    name = 'StationSetting1589776231640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "station_setting" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "outOfSongsBehavior" character varying NOT NULL DEFAULT 'PLAY_RANDOM_SONG_FROM_HISTORY_SONGS', "notifyOnlineUser" boolean NOT NULL DEFAULT true, "stationId" integer, "userId" integer, CONSTRAINT "PK_03e61fbcd43c3f30c869b8ccb1f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "station_setting" ADD CONSTRAINT "FK_a3845fbd60419fb8975a9210805" FOREIGN KEY ("stationId") REFERENCES "station"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "station_setting" ADD CONSTRAINT "FK_9b68cfe588b255d2fd3afb50adf" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "station_setting" DROP CONSTRAINT "FK_9b68cfe588b255d2fd3afb50adf"`, undefined);
        await queryRunner.query(`ALTER TABLE "station_setting" DROP CONSTRAINT "FK_a3845fbd60419fb8975a9210805"`, undefined);
        await queryRunner.query(`DROP TABLE "station_setting"`, undefined);
    }

}
