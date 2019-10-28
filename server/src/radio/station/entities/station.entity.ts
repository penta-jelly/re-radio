import { Song } from 'radio/song/entities/song.entity';
import { UserRole } from 'radio/user/entities/user-role.entity';
import { User } from 'radio/user/entities/user.entity';
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

  @Column({ nullable: true })
  description?: string;

  @OneToMany(type => UserRole, role => role.station)
  userRoles: UserRole[];

  @ManyToMany(type => StationTag)
  @JoinTable()
  tags: StationTag[];

  @OneToMany(type => User, user => user.currentStation)
  @JoinTable()
  onlineUsers: User[];

  @OneToMany(type => Song, song => song.station)
  songs: Song[];

  @OneToOne(type => Song, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn()
  playingSong: Song | null;
}
