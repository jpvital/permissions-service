import { Controller, Get, Post, Body } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    findAll(): Promise<User[]> {
        const result: Promise<User[]> = this.usersService.findAll();
        return result;
    }

    @Post()
    create(@Body() createUserDto: createUserDto): void {
        this.usersService.create(createUserDto);
    }
}
