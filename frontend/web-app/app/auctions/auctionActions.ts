"use server";
import { Auction, PagedResult } from "@/types";

export async function getData(
  queryString: string
): Promise<PagedResult<Auction>> {
  const url = `http://localhost:6001/search${queryString}`;
  console.log(url);
  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
