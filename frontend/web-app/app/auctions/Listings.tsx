"use client";
import React, { useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import { Auction, PagedResult } from "@/types";
import AppPagination from "../components/AppPagination";
import { getData } from "./auctionActions";
import Filters from "./Filters";
import { useParamsStore } from "@/hooks/useParamsStore";
import { shallow } from "zustand/shallow";
import qs from "query-string";
import EmptyFilter from "../components/EmptyFilter";

export default function Listings() {
  const [data, setData] = useState<PagedResult<Auction> | null>(null);
  const params = useParamsStore(
    (state) => ({
      pageNumber: state.pageNumber,
      pageSize: state.pageSize,
      pageCount: state.pageCount,
      searchTerm: state.searchTerm,
      orderBy: state.orderBy,
      filterBy: state.filterBy,
    }),
    shallow
  );

  const setParams = useParamsStore((state) => state.setParams);

  const getAuctionQueryString = qs.stringifyUrl({
    url: "",
    query: {
      pageSize: params.pageSize,
      pageNumber: params.pageNumber,
      searchTerm: params.searchTerm,
      orderBy: params.orderBy,
      filterBy: params.filterBy,
    },
  });

  useEffect(() => {
    getData(getAuctionQueryString).then((data) => {
      setData(data);
    });
  }, [getAuctionQueryString]);

  return (
    <>
      <Filters />
      {!data ? (
        <div>Loading...</div>
      ) : data.totalCount === 0 ? (
        <EmptyFilter showReset />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.results?.map((auction) => {
              return <AuctionCard auction={auction} key={auction.id} />;
            })}
          </div>{" "}
          <div className="flex justify-center mt-4">
            <AppPagination
              currentPage={params.pageNumber}
              totalPages={data.pageCount}
              onPageChange={(page: number) => setParams({ pageNumber: page })}
            />
          </div>
        </>
      )}
    </>
  );
}
