import { IWatchlist } from "../common/interfaces";
import { Coin } from "../models/coin.model";
import { Watchlist } from "../models/watchlist.model";

export const findAllWatchLists = async () => {
  const watchlists = await Watchlist.find();
  return watchlists;
};

export const findOne = async (code: string) => {
  const coin = await Watchlist.findOne({
    code: code,
  });
  return coin;
};

export const addWatchListCoin = async (payload: IWatchlist) => {
  const { code, minPrice, maxPrice } = payload;
  let watchList = await findOne(code);
  if (watchList) {
    watchList.minPrice = minPrice;
    watchList.maxPrice = maxPrice;
  } else {
    watchList = new Watchlist(payload);
  }
  await watchList.save();
  return watchList;
};
