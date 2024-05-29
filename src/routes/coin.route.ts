import express from "express";
import { getAllCoinsHandler } from "../controllers/coin.controller";

const router = express.Router();

router.get("/", getAllCoinsHandler);

export default router;
