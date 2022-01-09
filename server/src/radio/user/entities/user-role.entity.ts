import { registerEnumType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Station } from '../../station/entities/station.entity';
import { User } from './user.entity';

export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  STATION_OWNER = 'STATION_OWNER',
  STATION_ADMIN = 'STATION_ADMIN',
}

registerEnumType(UserRoleEnum, { name: 'UserRoleEnum' });

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column({ enum: [UserRoleEnum.ADMIN, UserRoleEnum.STATION_ADMIN, UserRoleEnum.STATION_OWNER] })
  role: UserRoleEnum;

  @ManyToOne((type) => User, (user) => user.roles)
  user: User;

  @ManyToOne((type) => Station, (station) => station.userRoles, { nullable: true })
  station?: Station;
}
