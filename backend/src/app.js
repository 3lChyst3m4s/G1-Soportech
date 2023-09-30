import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'

import tasksRoutes from "./routes/tasks";
import authRoutes from "./routes/auth";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser);

app.use(authRoutes);
app.use(tasksRoutes);

export default app;