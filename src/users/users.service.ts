import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface'
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private readonly users: User[] = [{
        username: '1',
        email: '1@1.com',
        password: '1',
        avatar: '1.jpeg',
        roles: [{ name: 'admin' }, { name: 'moderator' }]
    }, {
        username: '2',
        email: '2@2.com',
        password: '2',
        avatar: '2.jpeg',
        roles: [{ name: 'moderator' }]
    }]
    findAll(): User[] {
        return this.users;
    }

    create(createUserDto: createUserDto): User {
        return <User>createUserDto;
    }
}
