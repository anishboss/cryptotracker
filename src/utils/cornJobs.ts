import { CronJob } from "cron";
import { scrapDataAndSaveToDB } from "./scrapData";
import { watchListPriceChecker } from "./watchlistPriceChecker";

export const runCronJob = () => {
  const job = CronJob.from({
    cronTime: "1 * * * *",
    onTick: function () {
      console.log("You will see this every minute");
      watchListPriceChecker();
    },
    start: true,
  });

  const scrapData = CronJob.from({
    cronTime: "5 * * * *",
    onTick: function () {
      console.log("scrap data and save to db");
      scrapDataAndSaveToDB();
    },
    start: true,
  });
};
