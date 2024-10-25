import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

export default function JobsPost() {
  return (
    <div className="w-full flex items-center justify-between rounded-2xl sm:p-5 p-3 border-solid border-2 border-white hover:border-Primary bg-white hover:bg-Base transition-all">
      <div className="flex flex-col items-start sm:gap-7 gap-4">
        <h3 className="text-black font-bold sm:text-base text-sm">
          طراحی ربات معامله برای صرافی رمز ارزی
        </h3>
        <div className="flex items-center text-sm font-bold text-Primary sm:gap-3 gap-2">
          <BsCashCoin />
          <span className="">6.000.000</span>
          <span className="">تومان / در ماه</span>
        </div>
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-3 gap-1">
          <span className="bg-Base text-sm rounded-lg px-2 py-1">
            معامله‌گر بازارهای مالی
          </span>
          <span className="bg-Base text-sm rounded-lg px-2 py-1">پاره وقت</span>
        </div>
      </div>

      <div className="flex flex-col items-center h-full justify-between">
        <div className="flex sm:flex-row flex-col sm:items-center items-end sm:gap-8 gap-4">
          <div className="flex items-center sm:gap-2 gap-1">
            <GrLocation className="sm:text-xl text-lg" />
            <span className="">طهران</span>
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
