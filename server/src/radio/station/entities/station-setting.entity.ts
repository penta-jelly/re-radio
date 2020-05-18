import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, Column } from 'typeorm';
import { registerEnumType } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { Station } from './station.entity';

export enum StationRunningOutOfSongsBehaviorEnum {
  PLAY_RANDOM_SONG_FROM_HISTORY_SONGS = 'PLAY_RANDOM_SONG_FROM_HISTORY_SONGS',
  PLAY_FIRST_SONG_FROM_RELATED_SONGS = 'PLAY_FIRST_SONG_FROM_RELATED_SONGS',
}
registerEnumType(StationRunningOutOfSongsBehaviorEnum, { name: 'StationRunningOutOfSongsBehaviorEnum' });

@Entity()
export class StationSetting {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @ManyToOne((type) => Station, (station) => station.settings)
  station: Station;

  @ManyToOne((type) => User, (user) => user.stationSettings)
  user: User;

  @Column({
    default: StationRunningOutOfSongsBehaviorEnum.PLAY_RANDOM_SONG_FROM_HISTORY_SONGS,
    enum: [
      StationRunningOutOfSongsBehaviorEnum.PLAY_FIRST_SONG_FROM_RELATED_SONGS,
      StationRunningOutOfSongsBehaviorEnum.PLAY_RANDOM_SONG_FROM_HISTORY_SONGS,
    ],
  })
  outOfSongsBehavior: StationRunningOutOfSongsBehaviorEnum =
    StationRunningOutOfSongsBehaviorEnum.PLAY_RANDOM_SONG_FROM_HISTORY_SONGS;

  @Column({ default: true })
  notifyOnlineUser: boolean = true;
}
