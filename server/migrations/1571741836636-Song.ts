import { MigrationInterface, QueryRunner } from 'typeorm';

export class Song1571741836636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "song" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "startedAt" TIMESTAMP DEFAULT null, "title" character varying NOT NULL, "url" character varying NOT NULL, "thumbnail" character varying NOT NULL, "duration" integer NOT NULL, "status" character varying NOT NULL, "stationSlug" character varying NOT NULL, "upVoteUserIds" text NOT NULL, "downVoteUserIds" text NOT NULL, "creatorId" integer, "stationId" integer, CONSTRAINT "PK_baaa977f861cce6ff954ccee285" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ADD CONSTRAINT "FK_a397114812307b9767c69ce029c" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "song" ADD CONSTRAINT "FK_ea0ebb5b7a282b41bc3bb8349fc" FOREIGN KEY ("stationId") REFERENCES "station"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "song" DROP CONSTRAINT "FK_ea0ebb5b7a282b41bc3bb8349fc"`, undefined);
        await queryRunner.query(`ALTER TABLE "song" DROP CONSTRAINT "FK_a397114812307b9767c69ce029c"`, undefined);
        await queryRunner.query(`DROP TABLE "song"`, undefined);
    }

}
