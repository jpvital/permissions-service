import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    findAll(): Promise<User[]> {
        return this.usersRepository.find({ relations: ["roles"] });
    }

    create(createUserDto: createUserDto): void {
        const user: User = this.usersRepository.create(createUserDto);
        user.roles = createUserDto.roles;
        this.usersRepository.save(user);
    }
}
