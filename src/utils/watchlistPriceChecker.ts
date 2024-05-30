import { priceLogger } from "../logger/logger";
import { findAllCoins } from "../services/coin.service";
import { findAllWatchLists } from "../services/watchlist.service";
import { sendNotification } from "./notification";

function changeInPricePercentage(
  price: number,
  thresholdPrice: number
): number {
  const percentage = ((price - thresholdPrice) / thresholdPrice) * 100;
  return percentage;
}

function logNotification(
  code: string,
  price: number,
  minPrice: number,
  maxPrice: number
) {
  let message, percentage;
  if (price < minPrice) {
    percentage = changeInPricePercentage(price, minPrice);
    message = `${code} is on move, The Price is down ${percentage.toFixed(
      2
    )}% in 24hrs to $${price}`;

    console.log("message", message);
    sendNotification(message);

    priceLogger.info(message);
  } else if (price > maxPrice) {
    percentage = changeInPricePercentage(price, maxPrice);
    message = `${code} is on move, The Price is up ${percentage.toFixed(
      2
    )}% in 24hrs to $${price}`;
    console.log("message", message);

    priceLogger.info(message);
    sendNotification(message);
  }
}

export const watchListPriceChecker = async () => {
  try {
    const watchLists = await findAllWatchLists();
    if (watchLists.length === 0) {
      return;
    }
    const coins = await findAllCoins();
    if (coins.length === 0) return;
    for (let watchList of watchLists) {
      const coinIndex = coins.findIndex((coin) => coin.code === watchList.code);
      if (coinIndex > -1) {
        const { price, code } = coins[coinIndex];
        console.log("price", price, watchList.minPrice, watchList.maxPrice);
        logNotification(code, price, watchList.minPrice, watchList.maxPrice);
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};
