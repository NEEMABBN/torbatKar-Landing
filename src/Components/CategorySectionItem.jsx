import React from "react";
import { Link } from "react-router-dom";

export default function CategorySectionItem({ title, icon, description, btn }) {
  return (
    <div className="w-full flex flex-col items-center lg:justify-normal justify-between bg-Base rounded-2xl py-10 lg:px-24 px-9 lg:gap-10 gap-8 border-solid group border-white border-2 hover:border-Primary transition-all">
      <span className="text-7xl text-gray-500 group-hover:text-Primary transition-all">
        {icon}
      </span>
      <h3 className="text-black md:text-xl text-lg font-bold">{title}</h3>
      <p className="text-center leading-7 sm:text-base text-sm">
        {description}
      </p>
      <Link
        to="https://torbatkar.ir/signup"
        className="text-white group-hover:bg-Primary transition-all sm:text-base text-sm bg-gray-500 px-5 py-1 rounded-xl"
      >
        {btn}
      </Link>
    </div>
  );
}
