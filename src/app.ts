import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/connectDB";
import routes from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "100mb" }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

app.use("/", routes);
app.get("/", (req: Request, res: Response) => {
  res.send("welcome to cryptotracker ");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  connectDB();
});
