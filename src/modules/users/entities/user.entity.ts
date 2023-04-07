import { Twinch } from "src/modules/twinchs/entities/twinch.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({nullable:false})
    name: string;
    @Column({nullable:false})
    email: string;
    @Column({nullable:false})
    username: string;
    @Column({nullable:false})
    password: string;
    @OneToMany(type=>Twinch, twinch=>twinch.user)
    twinchs: Twinch[];
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}

