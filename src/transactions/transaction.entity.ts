import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column('decimal')
  amount: number;

  @Column()
  category: string;

  @Column()
  transactionDate: Date;

  @Column({ nullable: true })
  description: string;
}
