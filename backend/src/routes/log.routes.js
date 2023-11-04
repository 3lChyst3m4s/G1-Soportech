import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createLog,
  getLog,
} from "../controllers/log.controller.js";

const router = Router();

router.get("/logs/:id", authRequired, getLog);
router.post("/logs", authRequired, createLog);

export default router;