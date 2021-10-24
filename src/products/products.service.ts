import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import config from '../config/config';

@Injectable()
export class ProductsService {
  constructor(private httpService: HttpService) {}

  async findAll() {
    const URL = `https://${config.shopifyKey}:${config.shopifyPassword}${config.shopifyUrl}.json`;
    const { data } = await this.httpService.get(URL).toPromise();
    return data;
  }

  async getProduct(productId: string) {
    const URL = `https://${config.shopifyKey}:${config.shopifyPassword}${config.shopifyUrl}/${productId}.json`;
    const { data } = await this.httpService.get(URL).toPromise();
    return data;
  }
}
