import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarItems() {
  return (
    <ul className="lg:flex hidden items-center gap-4">
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
