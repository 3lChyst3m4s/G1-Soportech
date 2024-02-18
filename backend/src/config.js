import { config as dotenv } from 'dotenv';
dotenv();

export const database = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}
export const server = {
  port: process.env.PORT
}
export const authJwt = {
  jwtSecret: 'tu_clave_secreta_para_jwt',
}