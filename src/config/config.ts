import * as dotenv from 'dotenv';

class Config {
  port: number;
  mongoUrl: string;
  dbName: string;
  secret: string;
  expiresIn: string;
  shopifyKey: string;
  shopifyPassword: string;
  shopifyUrl: string;
  salt: string;
  serviceSmtp: string;
  userSmtp: string;
  passwordSmtp: string;
  timeInterval: number;

  constructor() {
    dotenv.config();
    this.port = parseInt(process.env.PORT);
    this.mongoUrl = process.env.MONGO_URL;
    this.secret = process.env.SECRET;
    this.expiresIn = process.env.EXPIRES_IN;
    this.shopifyKey = process.env.SHOPIFY_KEY;
    this.shopifyPassword = process.env.SHOPIFY_PASSWORD;
    this.shopifyUrl = `${process.env.SHOPIFY_URL}`;
    this.salt = process.env.SALT;
    this.serviceSmtp = process.env.SERVICE_SMTP;
    this.userSmtp = process.env.USER_SMTP;
    this.passwordSmtp = process.env.PASSWORD_SMTP;
    this.timeInterval = parseInt(process.env.TIME_INTERVAL);
  }
}

export default new Config();
