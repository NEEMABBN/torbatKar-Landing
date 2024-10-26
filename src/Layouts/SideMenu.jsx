import React from "react";
import { NavLink } from "react-router-dom";

export default function SideMenu({ isMenuOpen }) {
  return (
    <ul
      className={`${
        isMenuOpen ? "top-[4rem] opacity-100" : "top-[-15rem] opacity-0"
      } absolute sm:right-[11rem] right-[8rem] transition-all duration-500 rounded-2xl p-8 shadow-lg lg:hidden flex flex-col items-center bg-white z-30 gap-5 w-[200px]`}
    >
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-nowrap font-bold ${
              isActive ? "text-black" : "text-[#757575]"
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
            `text-nowrap font-bold ${
              isActive ? "text-black" : "text-[#757575]"
            }`
          }
        >
          فرصت‌های شغلی
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://torbatkar.ir/about"
          className={({ isActive }) =>
            `text-nowrap font-bold ${
              isActive ? "text-black" : "text-[#757575]"
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
            `text-nowrap font-bold ${
              isActive ? "text-black" : "text-[#757575]"
            }`
          }
        >
          تماس با ما
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://torbatkar.ir/employers-list/"
          className={({ isActive }) =>
            `text-nowrap font-bold ${
              isActive ? "text-black" : "text-[#757575]"
            }`
          }
        >
          کارفرمایان
        </NavLink>
      </li>
    </ul>
  );
}
