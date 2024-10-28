import React from "react";

export default function EachCompanyPost({ image, jobTitle }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img
        src={image}
        alt=""
        className="rounded-full sm:w-[100px] sm:h-[100px] w-[50px] h-[50px]"
      />
      <span className="text-black sm:font-bold font-semibold sm:text-base text-sm text-center">
        {jobTitle}
      </span>
    </div>
  );
}
