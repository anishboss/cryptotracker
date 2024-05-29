import express from "express";
import {
  createWatchListHandler,
  getAllWatchlistsHandler,
} from "../controllers/watchlist.controller";

const router = express.Router();

router.get("/", getAllWatchlistsHandler);
router.post("/", createWatchListHandler);

export default router;
