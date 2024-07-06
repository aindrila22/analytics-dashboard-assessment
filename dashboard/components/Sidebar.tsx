import {
  ChartBarSquareIcon,
  ChartPieIcon,
  PresentationChartBarIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

type props = {
  id: string;
};

const Sidebar = ({ id }: props) => {
  return (
    <div className="w-20 bg-[#151414] min-h-screen text-white border-r border-gray-800 hidden lg:block">
      <ul className="space-y-9 grid place-items-center mt-10">
        <li
          className={`${
            id === "barchart" ? "bg-[#1b1818] rounded-xl p-4" : "bg-transparent"
          }  `}
        >
          <Link href={"/"}>
            <ChartBarSquareIcon
              className={`${
                id === "barchart"
                  ? "h-6 w-6 text-sky-400"
                  : "h-6 w-6 text-gray-400"
              }`}
            />
          </Link>
        </li>
        <li
          className={`${
            id === "linechart"
              ? "bg-[#1b1818] rounded-xl p-4"
              : "bg-transparent"
          }  `}
        >
          <Link href={"/line"}>
            <PresentationChartBarIcon
              className={`${
                id === "linechart"
                  ? "h-6 w-6 text-yellow-300"
                  : "h-6 w-6 text-gray-400"
              }`}
            />
          </Link>
        </li>
        <li
          className={`${
            id === "piechart" ? "bg-[#1b1818] rounded-xl p-4" : "bg-transparent"
          }  `}
        >
          <Link href={"/pie"}>
            <ChartPieIcon
              className={`${
                id === "piechart"
                  ? "h-6 w-6 text-green-400"
                  : "h-6 w-6 text-gray-400"
              }`}
            />
          </Link>
        </li>
        <li
          className={`${
            id === "tabular" ? "bg-[#1b1818] rounded-xl p-4" : "bg-transparent"
          }  `}
        >
          <Link href={"/tabular"}>
            <TableCellsIcon
              className={`${
                id === "tabular"
                  ? "h-6 w-6 text-purple-400"
                  : "h-6 w-6 text-gray-400"
              }`}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
