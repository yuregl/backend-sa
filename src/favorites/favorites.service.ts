import { HttpException, Injectable } from '@nestjs/common';
import { FavoriteDto } from './dto/create-favorite.dto';
import { ProductsService } from '../products/products.service';
import { UsersService } from 'src/users/users.service';
import { Mail } from '../email/Email';
import config from '../config/config';

@Injectable()
export class FavoritesService {
  constructor(
    private productsService: ProductsService,
    private usersService: UsersService,
  ) {}
  async createFavorite(createFavoriteDto: FavoriteDto) {
    const { products } = await this.productsService.findAll();
    const findProduct = products.find(
      (element: any) => `${element.id}` === createFavoriteDto.productId,
    );

    if (findProduct === undefined) {
      throw new HttpException('This product does not exist', 404);
    }

    const isAlreadyFavorite = await this.usersService.isAlreadyFavorite(
      createFavoriteDto,
    );

    if (isAlreadyFavorite.length > 0) {
      throw new HttpException('The product is already favorited', 409);
    }

    await this.usersService.addFavoriteProduct(createFavoriteDto);
    const { email } = await this.usersService.findOne(createFavoriteDto.userId);
    const resultProducts = await this.listUserFavorite(
      createFavoriteDto.userId,
    );
    const newMail = new Mail();
    newMail.to = email;
    newMail.subject = 'List of favorite products';
    newMail.message = `Added ${JSON.stringify(resultProducts)}`;
    setTimeout(function () {
      newMail.sendMail();
    }, config.timeInterval);

    return { message: 'A product was favorited' };
  }

  async removeFavorite(removeFavorite: FavoriteDto) {
    const isAlreadyFavorite = await this.usersService.isAlreadyFavorite(
      removeFavorite,
    );

    if (isAlreadyFavorite.length === 0) {
      throw new HttpException('This product has not been favorited', 404);
    }

    await this.usersService.removeFavorite(removeFavorite);
    const { email } = await this.usersService.findOne(removeFavorite.userId);
    const resultProducts = await this.listUserFavorite(removeFavorite.userId);
    const newMail = new Mail();
    newMail.to = email;
    newMail.subject = 'List of favorite products';
    newMail.message = `remove ${JSON.stringify(resultProducts)}`;
    setTimeout(function () {
      newMail.sendMail();
    }, config.timeInterval);
    return { message: 'The product was successfully disfavored' };
  }

  async listUserFavorite(userId: string) {
    const user = await this.usersService.findOne(userId);
    const Products = [];

    if (user === null) {
      throw new HttpException('The user was not found', 404);
    }
    const { favoritesProducts } = user;

    favoritesProducts.forEach((element: string) => {
      const result = this.productsService.getProduct(element);
      Products.push(result);
    });

    const listProducts = await Promise.all(Products);

    return listProducts;
  }
}
