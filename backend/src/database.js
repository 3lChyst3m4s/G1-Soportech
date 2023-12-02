import mysql from 'mysql2/promise';
import Sequelize from 'sequelize';
import { database } from './config.js';

const dbConfig = database;

export const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql',
});

export const connect = async () => {
  return await mysql.createConnection(dbConfig);
};