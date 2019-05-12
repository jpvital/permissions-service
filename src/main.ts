import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from 'typeorm';

async function bootstrap() {
  // console.log('Creating connection');
  // const connection = createConnection({
  //   type: "mysql",
  //   port: 3306,
  //   username: "root",
  //   database: "permissions",
  //   host: 'mysql'
  // }).then(res=>console.log(res)).catch(e=>{
  //   console.log(e);
  // });
  // console.log('Created connection');

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
