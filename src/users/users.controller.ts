import { Controller, Get, Post, Body } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    findAll(): void {
        const result = this.usersService.findAll();
        console.log(result);
        return;
    }

    @Post()
    create(@Body() createUserDto: createUserDto): void {
        this.usersService.create(createUserDto);
    }
}
