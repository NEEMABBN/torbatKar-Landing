import React, { useState } from "react";
import NavbarItems from "../Components/NavbarItems";
import { FiLogIn } from "react-icons/fi";
import SideMenu from "./SideMenu";
import { FaXmark } from "react-icons/fa6";
import { TiThMenuOutline } from "react-icons/ti";
import logo from "../assets/Images/Logo.webp";

export default function NavbarLayouts() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full bg-[#FFFFFFA3] backdrop-blur-[9px] flex items-center justify-center z-10 fixed border-solid border-b-2 border-[#EFEFEF]">
      <div className="container mx-auto flex flex-row-reverse items-center justify-between px-3 py-3">
        <div className="flex flex-row-reverse items-center sm:gap-7 gap-3">
          <button className="bg-Primary text-white sm:px-4 px-2 py-1 rounded-xl sm:text-base text-sm">
            ثبت آگهی رایگان!
          </button>
          <button className="flex items-center sm:gap-1 font-bold sm:text-base text-sm">
            <FiLogIn className="text-Primary font-bold text-2xl sm:block hidden" />
            ورود | ثبت‌نام
          </button>
        </div>
        <div className="flex items-center sm:gap-7 gap-3">
          <img
            src={logo}
            alt=""
            className="lg:w-[150px] sm:w-[120px] w-[90px]"
          />
          <NavbarItems />
          <button
            onClick={handleMenu}
            className="lg:hidden block sm:text-2xl text-xl"
          >
            {isMenuOpen ? <FaXmark /> : <TiThMenuOutline />}
          </button>
          <SideMenu isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </div>
  );
}
