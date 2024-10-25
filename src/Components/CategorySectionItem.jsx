import React from "react";

export default function CategorySectionItem({
  title,
  image,
  description,
  btn,
}) {
  return (
    <div className="w-full flex flex-col items-center lg:justify-normal justify-between bg-Base rounded-2xl py-10 px-9 gap-10 border-solid group border-white border-2 hover:border-Primary transition-all">
      <h3 className="text-black md:text-2xl text-lg font-bold">{title}</h3>
      <img src={image} alt="" className="" />
      <p className="text-center font-bold sm:text-base text-sm">
        {description}
      </p>
      <button className="text-white group-hover:bg-Primary transition-all sm:text-base text-sm bg-gray-500 px-5 py-1 rounded-xl">
        {btn}
      </button>
    </div>
  );
}
