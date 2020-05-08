import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserRole } from './user-role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column({})
  password: string;

  @Column('character varying', { nullable: true })
  name: string | null;

  @Column('character varying', { nullable: true })
  country: string | null;

  @Column('character varying', { nullable: true })
  city: string | null;

  @Column('character varying', { nullable: true })
  bio: string | null;

  @Column('character varying', { nullable: true })
  avatarUrl: string | null;

  @Column('character varying', { nullable: true })
  coverUrl: string | null;

  @Column({ default: 0 })
  reputation: number = 0;

  @Column('character varying', { nullable: true })
  facebookId: string | null;

  @Column('character varying', { nullable: true })
  googleId: string | null;

  @OneToMany((type) => UserRole, (role) => role.user)
  roles: UserRole[];

  @Column('int', { nullable: true })
  currentStationId: number | null;
}
