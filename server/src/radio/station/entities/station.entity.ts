import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Song } from 'radio/song/entities/song.entity';
import { UserRole } from 'radio/user/entities/user-role.entity';
import { StationTag } from './station-tag.entity';

@Entity()
export class Station {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column('character varying', { nullable: true })
  description: string | null;

  @OneToMany(type => UserRole, role => role.station)
  userRoles: UserRole[];

  @ManyToMany(type => StationTag)
  @JoinTable()
  tags: StationTag[];

  @Column('int', { array: true, default: '{}' })
  onlineUserIds: number[];

  @OneToMany(type => Song, song => song.station)
  songs: Song[];

  @OneToOne(type => Song, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn()
  playingSong: Song | null;
}
