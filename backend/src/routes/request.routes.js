import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createRequest,
  deleteRequest,
  getRequest,
  getRequests,
  updateRequest,
} from "../controllers/request.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createRequestSchema } from "../schemas/request.schema.js";

const router = Router();

router.get("/requests", authRequired, getRequests);
router.get("/requests/:id", authRequired, getRequest);
router.post(
  "/requests",
  authRequired,
  validateSchema(createRequestSchema),
  createRequest
);
router.delete("/requests/:id", authRequired, deleteRequest);
router.put("/requests/:id", authRequired, updateRequest);

export default router;