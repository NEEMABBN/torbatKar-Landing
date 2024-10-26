import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

export default function JobsPost({ title, category, price, time, location }) {
  return (
    <div className="w-full flex items-center justify-between rounded-2xl sm:p-5 p-3 border-solid border-2 border-white shadow-[0px_0px_1px_1px_rgba(0,0,0,0.5)] hover:border-Primary bg-white hover:bg-Base transition-all">
      <div className="flex flex-col items-start sm:gap-7 gap-4">
        <h3 className="text-black font-bold sm:text-base text-sm">{title}</h3>
        <div className="flex items-center text-sm font-bold text-Primary sm:gap-3 gap-2">
          <BsCashCoin />
          {price}
        </div>
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-3 gap-1">
          <span className="bg-Base text-sm rounded-lg px-2 py-1">
            {category}
          </span>
          <span className="bg-Base text-sm rounded-lg px-2 py-1">{time}</span>
        </div>
      </div>

      <div className="flex flex-col items-center h-full justify-between">
        <div className="flex sm:flex-row flex-col sm:items-center items-end sm:gap-8 gap-4">
          <div className="flex items-center sm:gap-2 gap-1">
            <GrLocation className="sm:text-xl text-lg" />
            <span className="">{location}</span>
          </div>
          <button className="sm:text-xl text-lg">
            <FaRegBookmark />
          </button>
        </div>
        <button className="text-white bg-Primary px-2 py-1 rounded-lg text-sm text-nowrap">
          مشاهده جزئیات
        </button>
      </div>
    </div>
  );
}
