import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity()
export class User {
    @PrimaryColumn('varchar')
    username: string;
    
    @Column('varchar')
    email: string;
    
    @Column('varchar')
    password: string;
    
    @Column('varchar')
    avatar: string;

    @ManyToMany(() => Role, { cascade: ['insert'] })
    @JoinTable({name: "user_roles"})
    roles: Role[];
}