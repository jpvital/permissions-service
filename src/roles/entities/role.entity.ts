import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Role {
    @PrimaryColumn('varchar')
    name: string;

    @ManyToOne(type => User, user => user.roles)
    user: User;
}