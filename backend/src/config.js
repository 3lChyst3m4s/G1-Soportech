import { config as dotenv } from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv();

export const config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'test',
}

export const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
})

export const TOKEN_SECRET = 'some secret key';