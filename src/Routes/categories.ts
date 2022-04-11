// express router for users
import express from "express";
import * as CategoryController from "../Controllers/CategoryController";
const router = express.Router();

router.get("/categories", CategoryController.getCategories);
router.post("/categories", CategoryController.saveCategory);

export default router;
