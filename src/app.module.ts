import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import Config from './config/config';

@Module({
  imports: [MongooseModule.forRoot(`${Config.mongoUrl}`), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
