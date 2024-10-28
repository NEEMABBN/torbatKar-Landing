import React from "react";

export default function LazyLoadTemplate() {
  return (
    <div className="animate-pulse w-full flex flex-col items-start gap-5 bg-[#EFEFEF] p-5 rounded-2xl">
      <div className="w-full py-3 rounded-2xl bg-white"></div>
      <div className="w-1/2 py-3 rounded-2xl bg-white"></div>
      <div className="w-full flex items-center justify-between">
        <div className="w-[30%] py-3 rounded-2xl bg-white"></div>
        <div className="w-[30%] py-3 rounded-2xl bg-white"></div>
      </div>
    </div>
  );
}
