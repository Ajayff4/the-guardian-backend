// express router for users
import express from "express";
import * as UserController from "../Controllers/UserController";
const router = express.Router();

router.get("/users", UserController.getUsers);
router.post("/users", UserController.saveUser);

export default router;