import { TypeOf, number, object, string } from "zod";

export const createWatchlistCoinSchema = object({
  body: object({
    code: string({ required_error: "Code is required" }),
    minPrice: number({ required_error: "Min Price is required" }),
    maxPrice: number({ required_error: "Max Price is required" }),
  }),
});

export type CreateWatchlistCoinInput = TypeOf<
  typeof createWatchlistCoinSchema
>["body"];
