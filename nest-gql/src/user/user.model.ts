import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column('text', { nullable: false })
  email: string;

  @Column('text')
  hashed_pass: string;

  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Column()
  @DeleteDateColumn()
  deleted_at: Date;

  @Column()
  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  rv: number;
}
