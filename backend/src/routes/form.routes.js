import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createForm,
  getForm,
  getForms
} from "../controllers/form.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Form
 *  description: Form management
 */

/**
 * @swagger
 * /forms/{id}:
 * get:
 *   summary: Get forms by id
 *   tags: [Form]
 */
router.get("/forms/:id", authRequired, getForms);

/**
 * @swagger
 * /forms:
 * get:
 *   summary: Get all forms
 *   tags: [Form]
 */
router.get("/forms", authRequired, getForm);

/**
 * @swagger
 * /forms:
 * post:
 *   summary: Create a new form
 *   tags: [Form]
 */
router.post(
  "/forms",
  authRequired,
  createForm
);

export default router;