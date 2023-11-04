import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import requestsRoutes from "./routes/request.routes.js";
import logRoutes from "./routes/log.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", tasksRoutes);
app.use("/api", requestsRoutes);
app.use("/api", logRoutes);
app.use("/api", messageRoutes);

export default app;