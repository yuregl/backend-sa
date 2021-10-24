import { Controller, Put, Get, Body, Param, UseGuards } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoriteDto } from './dto/create-favorite.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Put('add')
  @UseGuards(JwtAuthGuard)
  async createFavorite(@Body() createFavoriteDto: FavoriteDto) {
    return await this.favoritesService.createFavorite(createFavoriteDto);
  }

  @Put('remove')
  @UseGuards(JwtAuthGuard)
  async removeFavorite(@Body() createFavoriteDto: FavoriteDto) {
    return await this.favoritesService.removeFavorite(createFavoriteDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async listUserFavorite(@Param('id') listFavorite: string) {
    return await this.favoritesService.listUserFavorite(listFavorite);
  }
}
