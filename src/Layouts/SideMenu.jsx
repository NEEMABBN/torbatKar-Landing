import React from "react";
import { NavLink } from "react-router-dom";

export default function SideMenu({ isMenuOpen, className }) {
  return (
    <ul
      className={`${
        isMenuOpen ? "top-[4rem] opacity-100" : "top-[-15rem] opacity-0"
      } ${className} absolute sm:right-[11rem] right-[8rem] transition-all duration-500 rounded-2xl p-8 shadow-lg lg:hidden flex flex-col items-center bg-white z-30 gap-5 w-[200px]`}
    >
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-nowrap font-bold text-black py-1 ${
              isActive
                ? "border-solid border-b-2 border-Primary"
                : "border-none"
            }`
          }
        >
          صفحه‌ی اصلی
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://torbatkar.ir/jobs/"
          className={({ isActive }) =>
            `text-nowrap font-bold text-black py-1 ${
              isActive
                ? "border-solid border-b-2 border-Primary"
                : "border-none"
            }`
          }
        >
          فرصت‌های شغلی
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://torbatkar.ir/employers-list/"
          className={({ isActive }) =>
            `text-nowrap font-bold text-black py-1 ${
              isActive
                ? "border-solid border-b-2 border-Primary"
                : "border-none"
            }`
          }
        >
          کارفرمایان
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://torbatkar.ir/about"
          className={({ isActive }) =>
            `text-nowrap font-bold text-black py-1 ${
              isActive
                ? "border-solid border-b-2 border-Primary"
                : "border-none"
            }`
          }
        >
          درباره ما
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://torbatkar.ir/contact/"
          className={({ isActive }) =>
            `text-nowrap font-bold text-black py-1 ${
              isActive
                ? "border-solid border-b-2 border-Primary"
                : "border-none"
            }`
          }
        >
          تماس با ما
        </NavLink>
      </li>
    </ul>
  );
}
