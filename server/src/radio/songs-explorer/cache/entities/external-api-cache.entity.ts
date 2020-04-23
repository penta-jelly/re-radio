import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

@Entity()
export class ExternalApiCache {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ comment: 'The URL should NOT include the API key. Otherwise, it makes the cache meaningless.' })
  url: string;

  @Column('simple-json')
  data: object;
}
