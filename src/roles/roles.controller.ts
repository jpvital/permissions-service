import { Controller, Get, Post, Body } from '@nestjs/common';
import { createRoleDto } from './dto/create-role.dto';
import { Role } from './interfaces/role.interface';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private readonly RolesService: RolesService) {}
    
    @Get()
    findAll(): Role[] {
        return this.RolesService.findAll();
    }

    @Post()
    create(@Body() createRoleDto: createRoleDto): Role {
        return this.RolesService.create(createRoleDto);
    }
}
