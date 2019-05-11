import { Module } from '@nestjs/common';
import { RolesController } from './roles/roles.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Role } from './roles/entities/role.entity';

const connection = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  database: 'permissions',
  entities: [User, Role],
  synchronize: true,
});

@Module({
  imports: [connection], //UsersModule, RolesModule
  controllers: [], //UsersController, RolesController
  providers: [], //UsersService, RolesService
})
export class AppModule {}
