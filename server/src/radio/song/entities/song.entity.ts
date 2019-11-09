import { registerEnumType } from 'type-graphql';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Station } from 'radio/station/entities/station.entity';
import { User } from 'radio/user/entities/user.entity';

export enum SongStatusEnum {
  PENDING = 'PENDING',
  PLAYING = 'PLAYING',
  PLAYED = 'PLAYED',
  SKIPPED = 'SKIPPED',
}

registerEnumType(SongStatusEnum, { name: 'SongStatusEnum' });

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true, default: null })
  startedAt?: Date;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  thumbnail: string;

  @Column()
  duration: number;

  @Column({ enum: [SongStatusEnum.PENDING, SongStatusEnum.PLAYING, SongStatusEnum.PLAYED, SongStatusEnum.SKIPPED] })
  status: SongStatusEnum;

  @ManyToOne(type => User, { onDelete: 'SET NULL' })
  creator: User;

  @ManyToOne(type => Station, station => station.songs)
  station: Station;

  @Column()
  stationSlug: string;

  @Column('int', { array: true, default: '{}' })
  upVoteUserIds: number[];

  @Column('int', { array: true, default: '{}' })
  downVoteUserIds: number[];

  @BeforeInsert()
  @BeforeUpdate()
  private updateStationSlug() {
    if (this.station) {
      this.stationSlug = this.station.slug;
    }
  }
}
