import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import config from '../config/config';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ProductsService {
  constructor(private httpService: HttpService) {}

  async findAll() {
    const URL = `https://${config.shopifyKey}:${config.shopifyPassword}${config.shopifyUrl}`;
    const { data } = await this.httpService.get(URL).toPromise();
    return data;
  }
}
