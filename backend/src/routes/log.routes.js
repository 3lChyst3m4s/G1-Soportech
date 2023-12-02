import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createLog,
  getLog,
} from "../controllers/log.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Log
 *  description: Log management
 */

/**
 * @swagger
 * /api/logs/{id}:
 * get:
 *  summary: Get log by id
 *  tags: [Log]
 */
router.get("/logs/:id", authRequired, getLog);

/**
 * @swagger
 * /api/logs:
 * post:
 *  summary: Create a new log
 *  tags: [Log]
 */
router.post("/logs", authRequired, createLog);

export default router;