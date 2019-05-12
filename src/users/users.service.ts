import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    create(createUserDto: createUserDto): void {
        this.usersRepository.insert(createUserDto);
    }
}
