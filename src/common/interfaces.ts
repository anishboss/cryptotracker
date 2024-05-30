export interface ICoin extends Document {
  name: string;
  code: string;
  image: string;
  price: number;
  marketCapital: string;
  // highValue24h?: string;
}

export interface IWatchlist extends Document {
  code: string;
  minPrice: number;
  maxPrice: number;
}
