import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import CustomLanding from "../../../Setting/CustomLanding";

export default function HeaderComponent() {
  const [value, setValue] = useState("");

  const getValue = (e) => {
    setValue(e.target.value);
  };
  const keyDownHandle = (e) => {
    if (e.key == "Enter") {
      ShowResult();
    }
  };

  const ShowResult = () => {
    if (value === "") {
      ("");
    } else {
      const searchUrl =
        "https://torbatkar.ir/jobs-search/?filter-title=" + value;
      window.location.href = searchUrl;
    }
  };

  return (
    <header className="container mx-auto flex lg:flex-row flex-col-reverse items-start bg-Base sm:rounded-[48px] px-12 py-24 sm:mt-28 mt-20 sm:mb-36 mb-10">
      <div className="lg:w-1/2 w-full flex items-start gap-7">
        <div className="lg:block hidden w-[5px] bg-gradient-to-b from-Primary to-Base h-[200px] rounded-full"></div>
        <div className="w-full flex flex-col lg:items-start items-center gap-7">
          <h2 className="md:text-4xl text-2xl text-[#344456] font-extrabold">
            در جستجوی <span className="text-Primary">شغلی مناسب</span>
          </h2>
          <p className="text-gray-500 lg:text-start text-center sm:text-base text-sm">
            "تربت کار" به عنوان مرجع کاریابی و استخدامی در شهرستان تربت حیدریه،
            به شما کمک می‌کند تا به راحتی شغل مناسب خود را پیدا کنید. ما در تربت
            کار با ارائه فرصت‌های شغلی متنوع در حوزه‌های مختلف، پلی میان
            کارجویان و کارفرمایان هستیم. اگر به دنبال شغلی در تربت حیدریه هستید
            یا به نیروی کار ماهر نیاز دارید، تربت کار بهترین انتخاب برای شما
            است."
          </p>
          <div className="bg-white flex items-center w-full py-3 px-4 overflow-hidden rounded-lg">
            <input
              type="text"
              onChange={getValue}
              onKeyDown={keyDownHandle}
              className="outline-none text-Primary w-full sm:text-base text-sm"
              placeholder="جستجوی فرصت شغلی، کارفرما..."
            />
            <button onClick={ShowResult} className="bg-white">
              <CiSearch className="text-Primary font-extralight text-3xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:h-0 sm:h-[500px] h-[390px] relative">
        <img
          src={CustomLanding.PersonImage}
          alt=""
          className="absolute sm:top-[-6rem] top-[-3rem] lg:left-[-4rem] left-0"
        />
        <img
          src={CustomLanding.AirPlaneIcon}
          alt=""
          className="absolute top-[-2rem] lg:left-[-7rem] left-[-3rem]"
        />
        <img
          src={CustomLanding.BlueMessageIcon}
          alt=""
          className="absolute lg:bottom-[-25rem] sm:bottom-[5rem] bottom-[1rem] sm:right-[-1rem] right-[-2rem]"
        />
        <img
          src={CustomLanding.CashIcon}
          alt=""
          className="absolute sm:top-[10rem] top-[6rem] sm:left-[1rem] left-[-2rem]"
        />
        <img
          src={CustomLanding.MobileIcon}
          alt=""
          className="absolute sm:top-[8rem] top-[7rem] lg:right-[3rem] md:right-0 sm:right-[-4rem] right-[-5rem]"
        />
        <img
          src={CustomLanding.RingIcon}
          alt=""
          className="absolute top-[-6rem] md:right-[8rem] right-0"
        />
        <img
          src={CustomLanding.SettingIcon}
          alt=""
          className="absolute lg:top-0 sm:top-[-2rem] top-[-5rem] lg:left-[3rem] sm:left-[6rem] left-[2rem]"
        />
        <img
          src={CustomLanding.WhiteMessageIcon}
          alt=""
          className="absolute lg:bottom-[-26rem] sm:bottom-[8rem] bottom-[7rem] lg:left-[-1rem] sm:left-0 left-[-2rem]"
        />
      </div>
    </header>
  );
}
