import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createMessage,
  getMessages,
} from "../controllers/message.controller.js";

const router = Router();

router.get("/messages/:id", authRequired, getMessages);
router.post("/messages", authRequired, createMessage);

export default router;