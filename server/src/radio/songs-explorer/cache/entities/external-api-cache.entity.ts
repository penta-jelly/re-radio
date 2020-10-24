import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

@Entity()
export class ExternalApiCache {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column({ comment: 'The URL should NOT include the API key. Otherwise, it makes the cache meaningless.' })
  url: string;

  @Column('simple-json')
  data: Record<string, unknown>;
}
