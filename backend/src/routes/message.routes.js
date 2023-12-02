import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createMessage,
  getMessages,
} from "../controllers/message.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Message
 *  description: Message management
 */

/**
 * @swagger
 * /api/messages/{id}:
 * get:
 *  summary: Get messages by id
 *  tags: [Message]
 */
router.get("/messages/:id", authRequired, getMessages);

/**
 * @swagger
 * /api/messages:
 * post:
 *  summary: Create a new message
 *  tags: [Message]
 */
router.post("/messages", authRequired, createMessage);

export default router;