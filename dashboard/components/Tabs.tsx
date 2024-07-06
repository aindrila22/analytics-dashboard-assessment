import { ChartBarSquareIcon, ChartPieIcon } from "@heroicons/react/20/solid";
import { PresentationChartBarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

type props = {
  id: string;
};

const Tabs = ({ id }: props) => {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center ">
      <Link
        href={"/"}
        className={`${
          id === "barchart"
            ? "bg-transparent text-sky-400 w-full py-5 flex cursor-pointer justify-center items-center"
            : "bg-[#151414] text-white w-full py-5 flex cursor-pointer justify-center items-center"
        }  `}
      >
        <ChartBarSquareIcon className="h-9 w-9 mr-4 text-gray-400" />
        <label>Electric Range by Model Year</label>
      </Link>
      <Link
        href={"/line"}
        className={`${
          id === "linechart"
            ? "bg-transparent text-yellow-400 w-full py-5 flex cursor-pointer justify-center items-center"
            : "bg-[#151414] text-white w-full py-5 flex cursor-pointer justify-center items-center"
        }  `}
      >
        <PresentationChartBarIcon className="h-9 w-9 mr-4 text-gray-400" />
        <label>Vehicle Count by City</label>
      </Link>

      <Link
        href={"/pie"}
        className={`${
          id === "piechart"
            ? "bg-transparent text-green-400 w-full py-5 flex cursor-pointer justify-center items-center"
            : "bg-[#151414] text-white w-full py-5 flex cursor-pointer justify-center items-center"
        }  `}
      >
        <ChartPieIcon className="h-9 w-9 mr-4 text-gray-400" />
        <label>Vehicle Type Distribution</label>
      </Link>
    </div>
  );
};

export default Tabs;
