import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Role } from '../roles/entities/role.entity';

export const MySqlbConfig: TypeOrmModuleOptions = {
  type: "mysql",
    port: 3306,
    username: "root",
    database: "permissions",
    host: 'mysql',
    entities: [User, Role],
    synchronize: true,
    logging: true,
};