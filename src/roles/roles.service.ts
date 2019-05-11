import { Injectable } from '@nestjs/common';
import { createRoleDto } from './dto/create-role.dto';
import { Role } from './entities/role.entity';
import { Role as RoleInterface } from './interfaces/role.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
    private readonly roles: RoleInterface[] = [{
        name: 'admin',
    }, {
        name: 'moderator'
    }]

    constructor(@InjectRepository(Role) private usersRepository: Repository<Role>) { }

    findAll(): RoleInterface[] {
        return this.roles;
    }

    create(createRoleDto: createRoleDto): void {
        return;
    }
}
