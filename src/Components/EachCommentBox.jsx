import React from "react";
import Profile from "../assets/Images/Profile.png";
import stars from "../assets/Images/Stars.svg";

export default function EachCommentBox() {
  return (
    <div className="w-full flex flex-col items-center bg-white rounded-2xl gap-5 py-6 sm:px-8 px-4">
      <div className="w-full flex items-start justify-between">
        <div className="flex items-start sm:gap-3 gap-2">
          <img src={Profile} alt="" className="w-[60px] h-[60px]" />
          <div className="flex flex-col items-start gap-1">
            <span className="text-black sm:text-base text-sm">
              احمدرضا حسینی
            </span>
            <span className="text-gray-500 sm:text-base text-sm">
              مدیر وبسایت آموزشی
            </span>
          </div>
        </div>
        <div className="">
          <img src={stars} alt="" className="" />
        </div>
      </div>
      <p className="text-sm text-gray-500">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
    </div>
  );
}
