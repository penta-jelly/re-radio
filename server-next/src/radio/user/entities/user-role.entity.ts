import { registerEnumType } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @Column({ enum: [UserRoleEnum.ADMIN, UserRoleEnum.STATION_ADMIN, UserRoleEnum.STATION_OWNER] })
  role: UserRoleEnum;

  @ManyToOne(type => User, user => user.roles)
  user: User;
}
