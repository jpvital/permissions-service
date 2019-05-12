import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Role) private rolesRepository: Repository<Role>) { }

    findAll(): Promise<Role[]> {
        return this.rolesRepository.find();
    }

    create(createRoleDto: CreateRoleDto): void {
        this.rolesRepository.insert(createRoleDto);
    }
}
