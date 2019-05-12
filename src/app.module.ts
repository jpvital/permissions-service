import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySqlbConfig } from './db/db.config';
import dependencies from './persistence';

const { modules, controllers, providers } = dependencies;

@Module({
  imports: [TypeOrmModule.forRoot(MySqlbConfig), ...modules],
  controllers: [...controllers],
  providers: [...providers],
})
export class AppModule {}
