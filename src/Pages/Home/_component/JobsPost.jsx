import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

export function JobsPost({
  title,
  category,
  price,
  time,
  location,
  showDetail,
}) {
  return (
    <div className="w-full flex items-center justify-between rounded-2xl sm:p-5 p-3 border-solid border-2 border-[#EFEFEF] hover:border-Primary bg-white hover:bg-Base transition-all">
      <div className="sm:w-auto w-full flex flex-col items-start sm:gap-7 gap-4">
        <h3 className="text-black font-bold sm:text-base text-sm sm:line-clamp-none line-clamp-[1.5]">
          {title}
        </h3>
        <div className="sm:hidden flex items-center sm:gap-2 gap-1">
          <GrLocation className="text-base" />
          <span className="text-xs">{location}</span>
        </div>
        <div className="flex items-center text-sm font-bold text-Primary sm:gap-3 gap-2">
          <BsCashCoin />
          {price}
        </div>
        <div className="flex flex-row sm:items-center items-start sm:gap-3 gap-1">
          <span className="bg-Base text-sm rounded-lg px-2 py-1">
            {category}
          </span>
          <span className="bg-Base text-sm rounded-lg px-2 py-1">{time}</span>
        </div>
        <div className="w-full sm:hidden flex items-center justify-between gap-3">
          <button className="sm:text-xl text-lg">
            <FaRegBookmark className="text-xl" />
          </button>
          <button
            onClick={() => (window.location.href = showDetail)}
            className="text-white bg-Primary px-2 py-1 rounded-lg text-sm text-nowrap"
          >
            مشاهده جزئیات
          </button>
        </div>
      </div>
      <div className="sm:flex hidden flex-col items-end h-full justify-between">
        <div className="flex sm:flex-row flex-col-reverse sm:items-center items-end sm:gap-8 gap-4">
          <div className="sm:flex hidden items-center gap-1">
            <GrLocation className="md:text-xl sm:text-lg text-base" />
            <span className="sm:text-sm text-xs">{location}</span>
          </div>
          <button className="sm:text-xl text-lg">
            <FaRegBookmark />
          </button>
        </div>
        <button
          onClick={() => (window.location.href = showDetail)}
          className=" text-white bg-Primary px-2 py-1 rounded-lg text-sm text-nowrap"
        >
          مشاهده جزئیات
        </button>
      </div>
    </div>
  );
}
