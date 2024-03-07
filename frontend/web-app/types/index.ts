export interface Auction {
  reservePrice: number;
  seller: string;
  winner?: string;
  soldAmount: number;
  currentHighBid: number;
  createdAt: string; // Assuming ISO 8601 formatted date string
  updatedAt: string; // Assuming ISO 8601 formatted date string
  auctionEnd: string; // Assuming ISO 8601 formatted date string
  status: string;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  imageUrl: string;
  id: string;
}

export type PagedResult<T> = {
  results: T[];
  pageCount: number;
  pageSize: number;
  pageLength: number;
  totalCount: number;
};
