import express from "express";
import { getAllUsers, createUser } from "../controllers/userController";

const router = express.Router();

router.get("/get-user", getAllUsers);
router.post("/create-user", createUser);

export default router;
