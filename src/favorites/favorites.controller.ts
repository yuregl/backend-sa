import { Controller, Put, Get, Body, Param } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoriteDto } from './dto/create-favorite.dto';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Put('add')
  async createFavorite(@Body() createFavoriteDto: FavoriteDto) {
    return await this.favoritesService.createFavorite(createFavoriteDto);
  }

  @Put('remove')
  async removeFavorite(@Body() createFavoriteDto: FavoriteDto) {
    return await this.favoritesService.removeFavorite(createFavoriteDto);
  }

  @Get(':id')
  async listUserFavorite(@Param('id') listFavorite: string) {
    return await this.favoritesService.listUserFavorite(listFavorite);
  }
}
