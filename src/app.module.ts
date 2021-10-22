import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import Config from './config/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forRoot(`${Config.mongoUrl}`),
    UsersModule,
    AuthModule,
    ProductsModule,
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
