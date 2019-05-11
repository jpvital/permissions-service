import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Role } from 'src/roles/entities/role.entity';

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

    @OneToMany(type => Role, role => role.user)
    roles: Role[];
}