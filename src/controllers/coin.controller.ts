import { NextFunction, Request, Response } from "express";
import { findAllCoins } from "../services/coin.service";

export const getAllCoinsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("get all coins");

    const coins = await findAllCoins();
    console.log(coins);

    return res.status(200).json(coins);
  } catch (error: any) {
    next(error);
  }
};
