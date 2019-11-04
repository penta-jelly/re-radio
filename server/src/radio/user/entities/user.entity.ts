import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Station } from 'radio/station/entities/station.entity';
import { UserRole } from './user-role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column({})
  password: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  bio?: string;

  @Column({ nullable: true })
  avatarUrl?: string;

  @Column({ nullable: true })
  coverUrl?: string;

  @Column({ nullable: true, default: 0 })
  reputation: number = 0;

  @Column({ nullable: true })
  facebookId?: string;

  @Column({ nullable: true })
  googleId?: string;

  @OneToMany(type => UserRole, role => role.user)
  roles: UserRole[];

  @ManyToOne(type => Station, station => station.onlineUsers)
  currentStation: Station;
}
