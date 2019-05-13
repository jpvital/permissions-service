import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../persistence/users/entities/user.entity';
import { Role } from '../persistence/roles/entities/role.entity';

export const MySqlbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
    port: Number.parseInt(process.env.MYSQL_PORT, 10),
    username: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    entities: [User, Role],
    synchronize: true,
    logging: true,
};

export const SqlLiteDbConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: `permissions.sqlite`,
  entities: [ User, Role ],
  synchronize: true,
  logging: true,
};
