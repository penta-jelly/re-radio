import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';
import { YOUTUBE_SERVICE_KEY } from '../../youtube/shared';

@Entity()
export class SongCache {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column()
  songId: string;

  @Column({ type: 'enum', enum: [YOUTUBE_SERVICE_KEY], default: YOUTUBE_SERVICE_KEY })
  songService: typeof YOUTUBE_SERVICE_KEY;

  @Column()
  queryParts: string;

  @Column('simple-json')
  data: object;
}
