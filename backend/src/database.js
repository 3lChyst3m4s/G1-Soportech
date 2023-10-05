import Sequelize from 'sequelize';
import { database } from './config.js';

const dbConfig = database;

export const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql',
});