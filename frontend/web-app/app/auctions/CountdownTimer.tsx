"use client";
import React from "react";
import Countdown from "react-countdown";
type Props = {
  auctionEnd: string;
};
const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
  days: number;
}) => {
  return (
    <div
      className={`
          border-2 border-white text-white rounded-lg py-1 px-2 flex justify-center
        ${
          completed
            ? "bg-red-600"
            : days === 0 && hours < 10
            ? "bg-amber-600"
            : "bg-green-600"
        }
    `}
    >
      {completed ? (
        <span>Auction Finished</span>
      ) : (
        <span suppressHydrationWarning>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      )}
    </div>
  );
};

export default function CountdownTimer({ auctionEnd }: Props) {
  return (
    <div>
      <Countdown date={new Date(auctionEnd)} renderer={renderer} />
    </div>
  );
}
