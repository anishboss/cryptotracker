import { Coin } from "../models/coin.model";

export const findAllCoins = async () => {
  const coins = await Coin.find();
  return coins;
};
