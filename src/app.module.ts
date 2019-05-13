import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqlLiteDbConfig } from './db/db.config';
import dependencies from './persistence';

const { modules, controllers, providers } = dependencies;

@Module({
  imports: [TypeOrmModule.forRoot(SqlLiteDbConfig), ...modules],
  controllers: [...controllers],
  providers: [...providers],
})
export class AppModule {}
