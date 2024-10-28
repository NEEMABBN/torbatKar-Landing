import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarItems() {
  return (
    <ul className="lg:flex hidden items-center gap-7">
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
          to="https://torbatkar.ir/about"
          className={({ isActive }) =>
            `text-nowrap font-bold text-black py-1 ${
              isActive
                ? "border-solid border-b-2 border-Primary"
                : "border-none"
            }`
          }
        >
          درباره‌ما
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
          تماس‌باما
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
    </ul>
  );
}
