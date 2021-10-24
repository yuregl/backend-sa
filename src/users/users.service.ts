import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocumnet } from './entities/user.entity';
import { FavoriteDto } from '../favorites/dto/create-favorite.dto';
import * as bcrypt from 'bcrypt';
import { Types } from 'mongoose';

import config from '../config/config';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocumnet>) {}

  async create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    const salt = parseInt(config.salt);
    const newpassword = await bcrypt.hash(user.password, salt);
    user.password = newpassword;
    const userAlreadyExist = await this.userModel
      .findOne({
        email: user.email,
      })
      .exec();

    if (userAlreadyExist) {
      return { message: 'User already exist' };
    }

    return user.save();
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);
    return user;
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async addFavoriteProduct({ userId, productId }: FavoriteDto) {
    const result = await this.userModel.updateOne(
      { _id: userId },
      { $push: { favoritesProducts: productId } },
    );
    return result;
  }

  async isAlreadyFavorite({ userId, productId }: FavoriteDto) {
    const result = await this.userModel.aggregate([
      {
        $match: {
          _id: new Types.ObjectId(userId),
        },
      },
      {
        $unwind: {
          path: '$favoritesProducts',
        },
      },
      {
        $match: {
          favoritesProducts: productId,
        },
      },
      {
        $project: {
          _id: 1,
          favoritesProducts: 1,
          username: 1,
          email: 1,
        },
      },
    ]);
    return result;
  }

  async removeFavorite({ userId, productId }: FavoriteDto) {
    const result = await this.userModel.updateOne(
      { _id: new Types.ObjectId(userId) },
      { $pull: { favoritesProducts: { $in: [productId] } } },
    );

    return result.modifiedCount;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUserDto,
      },
      {
        new: true,
      },
    );
  }

  async remove(id: string) {
    return await this.userModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
