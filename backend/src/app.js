import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
const swaggerOptions = {
  definition: {
    info: {
      title: "Backend API",
      description: "Backend API Information",
    },
  },
  apis: ["./src/routes/**/*.js"]
};
const specs = swaggerJSDoc(swaggerOptions);

import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import requestsRoutes from "./routes/request.routes.js";
import logRoutes from "./routes/log.routes.js";
import messageRoutes from "./routes/message.routes.js";
import formRoutes from "./routes/form.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use(tasksRoutes);
app.use("/api", requestsRoutes);
app.use("/api", logRoutes);
app.use("/api", messageRoutes);
app.use("/api", formRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;