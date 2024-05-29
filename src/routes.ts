import { Router } from "express";
import coinRouter from "./routes/coin.route";
import watchlistRouter from "./routes/watchlist.route";

const router = Router();

router.use("/coins", coinRouter);
router.use("/watchlists", watchlistRouter);

export default router;
