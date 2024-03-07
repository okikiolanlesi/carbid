"use client";
import React, { useState } from "react";
import { Pagination } from "flowbite-react";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
export default function AppPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={onPageChange}
      totalPages={totalPages}
      layout="pagination"
      showIcons={true}
      className="text-blue-500 mb-5"
    />
  );
}
