import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Station } from './station.entity';

@Entity()
export class StationTag {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToMany(type => Station)
  stations: Station[];
}
