import { Model, Schema, model } from "mongoose";
import { IWatchlist } from "../common/interfaces";

const watchlistSchema: Schema = new Schema(
  {
    code: { type: String },
    minPrice: { type: Number },
    maxPrice: { type: Number },
  },
  {
    timestamps: true,
  }
);

export const Watchlist: Model<IWatchlist> = model<IWatchlist>(
  "Watchlist",
  watchlistSchema
);
