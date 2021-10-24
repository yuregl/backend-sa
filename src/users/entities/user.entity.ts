import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocumnet = User & Document;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({ default: [] })
  favoritesProducts: [string];
}

export const UserSchema = SchemaFactory.createForClass(User);
