import { useParamsStore } from "@/hooks/useParamsStore";
import { Button, ButtonGroup } from "flowbite-react";
import React from "react";
import { AiOutlineClockCircle, AiOutlineSortAscending } from "react-icons/ai";
import { BsFillStopCircleFill, BsStopwatchFill } from "react-icons/bs";
import { GiFinishLine, GiFlame } from "react-icons/gi";

const pageSizeButtons = [4, 8, 12];

const orderButtons = [
  {
    label: "Alphabetical",
    icon: AiOutlineSortAscending,
    value: "make",
  },
  {
    label: "End date",
    icon: AiOutlineClockCircle,
    value: "endingSoon",
  },
  {
    label: "Recently added",
    icon: BsFillStopCircleFill,
    value: "new",
  },
];

const filterButtons = [
  {
    label: "Live Auctions",
    icon: GiFlame,
    value: "live",
  },
  {
    label: "Ending < 6 hours",
    icon: GiFinishLine,
    value: "endingSoon",
  },
  {
    label: "Completed",
    icon: BsStopwatchFill,
    value: "finished",
  },
];

export default function Filters() {
  const pageSize = useParamsStore((state) => state.pageSize);
  const orderBy = useParamsStore((state) => state.orderBy);
  const filterBy = useParamsStore((state) => state.filterBy);
  const setParams = useParamsStore((state) => state.setParams);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center mb-4">
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Order by:</span>
        <ButtonGroup className="flex-wrap">
          {orderButtons.map((order) => (
            <Button
              key={order.label}
              onClick={() => setParams({ orderBy: order.value })}
              disabled={order.value === orderBy}
              color={`${order.value === orderBy ? "red" : "gray"}`}
            >
              <order.icon className="mr-2" />
              {order.label}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Filter by:</span>
        <ButtonGroup className="flex-wrap">
          {filterButtons.map((order) => (
            <Button
              key={order.label}
              onClick={() => setParams({ filterBy: order.value })}
              disabled={order.value === filterBy}
              color={`${order.value === filterBy ? "red" : "gray"}`}
            >
              <order.icon className="mr-2" />
              {order.label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Page size:</span>
        <ButtonGroup>
          {pageSizeButtons.map((size) => (
            <Button
              key={size}
              onClick={() => setParams({ pageSize: size })}
              disabled={pageSize === size}
              color={`${pageSize === size ? "red" : "gray"}`}
            >
              {size}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
