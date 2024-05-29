import { NextFunction, Request, Response } from "express";
import {
  addWatchListCoin,
  findAllWatchLists,
} from "../services/watchlist.service";

export const getAllWatchlistsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("get all watchlists");
    const watchlists = await findAllWatchLists();
    return res.status(200).json(watchlists);
  } catch (error: any) {
    next(error);
  }
};

export const createWatchListHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("req.body", req.body);
    const watchList = await addWatchListCoin(req.body);

    return res.status(201).json({
      sucess: true,
      message: "Added to WatchLists Sucessfully.",
    });
  } catch (error) {
    console.log("error", error);
  }
};
