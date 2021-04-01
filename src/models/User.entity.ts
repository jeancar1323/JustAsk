import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Exclude()
  @Column()
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updateAt: Date;
}
