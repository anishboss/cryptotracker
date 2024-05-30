import express from "express";
import {
  createWatchListHandler,
  getAllWatchlistsHandler,
} from "../controllers/watchlist.controller";
import { validate } from "../middlewares/validate";
import { createWatchlistCoinSchema } from "../validations/watchlist.validation";

const router = express.Router();

router.get("/", getAllWatchlistsHandler);
router.post("/", validate(createWatchlistCoinSchema), createWatchListHandler);

export default router;
