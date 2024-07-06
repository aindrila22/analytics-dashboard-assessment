import { BellAlertIcon } from "@heroicons/react/16/solid";
import { Bars3BottomLeftIcon, TruckIcon } from "@heroicons/react/20/solid";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 text-white shadow-md p-7">
      <div className="flex justify-around items-center gap-16">
        <div className="hidden md:block">
          <Bars3BottomLeftIcon className="h-5 w-5" />
        </div>
        <div className="flex justify-around items-center gap-1">
          <TruckIcon className="h-10 w-10 text-green-400" />{" "}
          <label className="text-2xl tracking-tighter">station</label>
        </div>
      </div>
      <div className="w-6/12 hidden md:block">
        <input
          type="text"
          placeholder="search"
          className="bg-[#151414] px-6 py-2 focus:border focus:border-gray-500 text-base rounded-full w-full outline-none"
        />
      </div>
      <div className="flex justify-evenly items-center gap-8">
        <BellAlertIcon className="w-6 h-6" />
        <div className="avatar online">
          <div className="w-10 h-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
