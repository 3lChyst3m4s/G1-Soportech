import mysql from 'mysql2/promise';
import Sequelize from 'sequelize';
import { createClient } from 'redis';
import { database } from './config.js';

const dbConfig = database;
const cacheHostName = "supportcache.redis.cache.windows.net";
const cachePassword = "DzAgv7PCR1gqt38cSX38WPEsEMlvRX4Z6AzCaAtKFtc=";

export const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql',
});

const client = createClient({
  url: `rediss://${cacheHostName}:6380`,
  password: cachePassword
});

client.connect().then(() => {
  console.log("Connected to Redis");
}).catch(ex => {
  console.log("Error connecting to Redis:");
  console.log(ex);
});

export const connect = async () => {
  const cachedData = await client.get('mysql');

  if (cachedData) {
    console.log('Using cached data');
    return JSON.parse(cachedData);
  }

  const mysqlConnection = await mysql.createConnection(dbConfig);
  console.log('New connection');

  client.set('mysql', JSON.stringify(mysqlConnection));

  return mysqlConnection;

  //await client.del('mysql');
};