import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities';

@Entity()
export class Twinch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;
  
  @ManyToOne(type=>User,user=>user.twinchs,{cascade:true})
  @JoinColumn({name: 'user_id'})
  user: User;
}