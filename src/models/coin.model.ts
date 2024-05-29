import { Model, Schema, model } from "mongoose";
import { ICoin } from "../common/interfaces";

const coinSchema: Schema = new Schema(
  {
    name: { type: String },
    code: { type: String },
    image: { type: String },
    price: { type: Number },
    marketCapital: { type: String },
    highValue24h: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Coin: Model<ICoin> = model<ICoin>("Coin", coinSchema);
