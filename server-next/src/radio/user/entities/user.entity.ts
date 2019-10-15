import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './user-role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
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
}
