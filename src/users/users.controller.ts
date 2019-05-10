import { Controller, Get, Post, Body } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    findAll(): User[] {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body() createUserDto: createUserDto): User {
        return this.usersService.create(createUserDto);
    }
}
