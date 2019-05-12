import { Controller, Get, Post, Body } from '@nestjs/common';
import { createRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';

@Controller('roles')
export class RolesController {
    constructor(private readonly RolesService: RolesService) {}
    
    @Get()
    findAll(): Promise<Role[]> {
        return this.RolesService.findAll();
    }

    @Post()
    create(@Body() createRoleDto: createRoleDto): void {
        this.RolesService.create(createRoleDto);
    }
}
