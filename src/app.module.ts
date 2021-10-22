import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import Config from './config/config';
import { HttpModule } from '@nestjs/axios';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${Config.mongoUrl}`),
    UsersModule,
    AuthModule,
    ProductsModule,
    HttpModule,
    FavoritesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
