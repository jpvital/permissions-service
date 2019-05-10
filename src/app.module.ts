import { Module } from '@nestjs/common';
import { RolesController } from './roles/roles.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [RolesModule, UsersModule],
  controllers: [RolesController, UsersController],
  providers: [UsersService, RolesService],
})
export class AppModule {}
