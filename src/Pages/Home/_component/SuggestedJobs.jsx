import React from "react";
import JobsPost from "./JobsPost";
import { FaChevronLeft } from "react-icons/fa";

export default function SuggestedJobs() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-12 sm:my-28 my-14 sm:px-0 px-3">
      <h2 className="md:text-4xl sm:text-2xl text-xl text-Primary font-bold">
        مشاغل پیشنهادی در تربت‌کار
      </h2>
      <p className="md:text-start text-center sm:text-base text-sm">
        در تربت کار  شغلی را پیدا کنید که شرایط زندگی شما را فراهم می کند.
        استخدام در تربت حیدریه آسان شد
      </p>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
          <JobsPost />
          <JobsPost />
          <JobsPost />
          <JobsPost />
          <JobsPost />
          <JobsPost />
          <JobsPost />
          <JobsPost />
        </div>
        <div className="w-full flex justify-end">
          <button className="flex items-center gap-1 text-black font-bold sm:text-base text-sm">
            مشاهده همه موقعیت‌های شغلی
            <FaChevronLeft className="sm:text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
