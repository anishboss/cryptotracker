import axios from "axios";
const { JSDOM } = require("jsdom");
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import connectDB from "../config/connectDB";
import { Coin } from "../models/coin.model";
import { ICoin } from "../common/interfaces";
connectDB();

async function extractCoinData(): Promise<ICoin[]> {
  const coins: ICoin[] = [];
  const response = await axios.get("https://coinranking.com/");
  const dom = new JSDOM(response.data);
  const rows = dom.window.document.querySelectorAll(".table__row--click");

  rows.forEach((row: any) => {
    const image: ICoin["image"] = row.querySelector(".profile__logo").src;
    const name: ICoin["name"] = row
      .querySelector(".profile__name a")
      .textContent.trim();
    const code: ICoin["code"] = row
      .querySelector(".profile__subtitle-name")
      .textContent.trim();
    const price: ICoin["price"] = parseFloat(
      row.querySelectorAll(".valuta")[0].textContent.replace(/[,$]/g, "").trim()
    );
    const marketCapital: ICoin["marketCapital"] = row
      .querySelectorAll(".valuta")[1]
      .textContent.replace("$", "")
      .trim();
    const highValue24h: ICoin["highValue24h"] = row
      .querySelector(".change")
      .textContent.trim();
    let coin: ICoin = {
      name,
      code,
      price,
      image,
      marketCapital,
      highValue24h,
    } as ICoin;
    coins.push(coin);
  });
  console.log("extracted coinsData");
  return coins;
}

async function updateCoins(coins: ICoin[]) {
  try {
    await dropCoinCollection();
    await Coin.insertMany(coins);
    console.log("Coins inserted to database");
  } catch (error) {
    console.log("error inserting coins to db", error);
  }
}

async function dropCoinCollection() {
  try {
    const collections = await mongoose.connection.db
      .listCollections({ name: "coins" })
      .toArray();
    if (collections.length === 0) {
      console.log("Collection not found");
    } else {
      await Coin.collection.drop();
      console.log("coins collection dropped sucesfully.");
    }
  } catch (error) {
    console.log("coins drop errror", error);
  }
}

export async function scrapDataAndSaveToDB() {
  const coins = await extractCoinData();
  await updateCoins(coins);
}
