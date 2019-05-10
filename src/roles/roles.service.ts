import { Injectable } from '@nestjs/common';
import { Role } from './interfaces/role.interface'
import { createRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    private readonly roles: Role[] = [{
        name: 'admin',
    }, {
        name: 'moderator'
    }]
    findAll(): Role[] {
        return this.roles;
    }

    create(createRoleDto: createRoleDto): Role {
        return <Role>createRoleDto;
    }
}
