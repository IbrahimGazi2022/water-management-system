import express from "express";
import { allUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/all-user', allUser);

export default router;
