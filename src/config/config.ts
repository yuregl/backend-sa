import dotenv from 'dotenv';

class Config {
  port: number;
  mongoUrl: string;
  dbName: string;
  secret: string;
  expiresIn: string;
  shopifyKey: string;
  shopifyPassword: string;
  shopifyUrl: string;

  constructor() {
    dotenv.config();
    this.port = parseInt(process.env.PORT);
    this.mongoUrl = process.env.MONGO_URL;
    this.dbName = process.env.DB_NAME;
    this.secret = process.env.SECRET;
    this.expiresIn = process.env.EXPIRES_IN;
    this.shopifyKey = process.env.SHOPIFY_KEY_API;
    this.shopifyPassword = process.env.SHOPIFY_PASSWORD;
    this.shopifyUrl = `${process.env.SHOPIFY_URL}`;
  }
}

export default new Config();
