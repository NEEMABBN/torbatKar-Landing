import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export default function EachCommentBox({
  EmployerName,
  BusinessName,
  Rate,
  Message,
  Profile,
}) {
  const renderstars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Rate ? <FaStar /> : <CiStar />);
    }
    return stars;
  };

  return (
    <div className="w-full flex flex-col h-[190px] justify-between items-center bg-white rounded-2xl gap-5 py-6 sm:px-8 px-4">
      <div className="w-full flex items-start justify-between">
        <div className="flex items-start sm:gap-3 gap-2">
          <img src={Profile} alt="" className="w-[60px] h-[60px]" />
          <div className="flex flex-col items-start gap-1">
            <span className="text-black sm:text-base text-sm">
              {EmployerName}
            </span>
            <span className="text-gray-500 sm:text-base text-sm">
              {BusinessName}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-yellow-400">
          {renderstars()}
        </div>
      </div>
      <p className="text-sm text-gray-500">{Message}</p>
    </div>
  );
}
