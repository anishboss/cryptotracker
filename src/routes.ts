import { Router } from "express";
import coinRouter from "./routes/coin.route";

const router = Router();

router.use("/coins", coinRouter);

export default router;
