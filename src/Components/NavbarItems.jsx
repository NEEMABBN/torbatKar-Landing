import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarItems() {
  return (
    <ul className="lg:flex hidden items-center gap-7">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-nowrap font-bold text-black py-[23px] ${
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
        <button
          onClick={() => (window.location.href = "https://torbatkar.ir/jobs/")}
          className="text-nowrap text-black font-bold"
        >
          فرصت‌های شغلی
        </button>
      </li>
      <li>
        <button
          onClick={() =>
            (window.location.href = "https://torbatkar.ir/employers-list/")
          }
          className="text-nowrap text-black font-bold"
        >
          کارفرمایان
        </button>
      </li>
      <li>
        <button
          onClick={() => (window.location.href = "https://torbatkar.ir/about")}
          className="text-nowrap text-black font-bold"
        >
          درباره‌ما
        </button>
      </li>
      <li>
        <button
          onClick={() =>
            (window.location.href = "https://torbatkar.ir/contact/")
          }
          className="text-nowrap text-black font-bold"
        >
          تماس‌با‌ما
        </button>
      </li>
    </ul>
  );
}
