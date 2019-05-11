import { Injectable } from '@nestjs/common';
import { User as UserInterface } from './interfaces/user.interface'
import { createUserDto } from './dto/create-user.dto';
import { User as UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    private readonly users: UserInterface[] = [{
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

    constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) { }

    findAll(): Promise<UserInterface[]> {
        return this.usersRepository.find();
    }

    create(createUserDto: createUserDto): void {
        return;
    }
}
