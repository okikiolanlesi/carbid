"use client";
import { useParamsStore } from "@/hooks/useParamsStore";
import React, { KeyboardEvent } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const setParams = useParamsStore((state) => state.setParams);
  const searchValue = useParamsStore((state) => state.searchValue);
  const setSearchValue = useParamsStore((state) => state.setSearchValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex w-full items-center border-2 rounded-full sm:py-2 shadow-sm">
      <input
        type="text"
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            setParams({ searchTerm: searchValue });
          }
        }}
        value={searchValue}
        onChange={handleChange}
        placeholder="Search for cars by make, model or color"
        className="flex-grow pl-5 w-full px-4 outline-none border-none bg-transparent text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-0"
      />
      <button
        onClick={() => setParams({ searchTerm: searchValue })}
        className=" bg-red-400 text-white p-2 cursor-pointer mx-2 rounded-full"
      >
        <FaSearch />
      </button>
    </div>
  );
}
