import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import routes from "./routes";

const app: Express = express();

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
  res.sendFile(__dirname + "/public/index.html");
});

export default app;
