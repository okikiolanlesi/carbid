"use client";
import { useParamsStore } from "@/hooks/useParamsStore";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineCar } from "react-icons/ai";

export default function Logo() {
  const resetParams = useParamsStore((state) => state.reset);
  const router = useRouter();
  return (
    <div
      onClick={() => {
        resetParams();
        router.push("/");
      }}
      className="flex gap-2 items-center min-w-max  sm:text-xl md:text-2xl font-semibold text-red-500 sm:mb-0"
    >
      <AiOutlineCar />
      <div>Carbid Auctions</div>
    </div>
  );
}
