import { Router } from "express";
import {
  login,
  logout,
  profile,
  register,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Authentication
 */

/**
 * @swagger
 * /api/auth/register:
 * post:
 *  summary: Register a new user
 *  tags: [Auth]
 */
router.post("/register", validateSchema(registerSchema), register);

/**
 * @swagger
 * /api/auth/login:
 * post:
 *  summary: Login a user
 *  tags: [Auth]
 */
router.post("/login", validateSchema(loginSchema), login);

/**
 * @swagger 
 * /api/auth/logout:
 * post:
 *  summary: Logout a user
 *  tags: [Auth]
 */
router.post("/logout", logout);

/**
 * @swagger
 * /api/auth/profile/{id}:
 * get:
 *  summary: Get user profile
 *  tags: [Auth]
 */
router.get("/profile/:id", authRequired, profile);

export default router;