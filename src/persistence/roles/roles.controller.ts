import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/role.entity';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Get()
    findAll(): Promise<Role[]> {
        const result: Promise<Role[]> = this.rolesService.findAll();
        return result;
    }

    @Post()
    create(@Body() createRoleDto: CreateRoleDto): void {
        this.rolesService.create(createRoleDto);
    }
}
