import React from "react";
import LinearIcon from "../../../assets/Images/Linearrr.svg";
import featureIcon1 from "../../../assets/Images/feature-icon.svg";
import featureIcon2 from "../../../assets/Images/feature-icon2.svg";
import cashingIcon from "../../../assets/Images/Group 1000004576.svg";

export default function WebDescription() {
  return (
    <div className="container mx-auto flex flex-col items-center relative">
      <div className="w-full flex flex-col items-center bg-Primary sm:rounded-2xl relative overflow-hidden sm:gap-8 gap-5 pt-14 pb-52">
        <img
          src={LinearIcon}
          alt=""
          className="absolute lg:top-[-10rem] top-[-14rem] lg:left-[-45rem] md:left-[-25rem] left-[-19rem]"
        />
        <h2 className="text-white sm:text-2xl text-xl font-bold">
          سایت تربت‌کار حیدریه چگونه کار میکند؟
        </h2>
        <p className="text-sm text-white text-center">
          راهنمای جامع ثبت شغل و جستجوی شغل در تربت کار
        </p>
        <span className="bg-[#FFC947] w-[130px] h-1 rounded-full"></span>
      </div>

      <div className="sm:w-[90%] w-[85%] mx-auto grid lg:grid-cols-3 sm:gap-12 gap-9 lg:absolute static lg:bottom-[-10rem] lg:translate-y-0 translate-y-[-10rem]">
        <div className="bg-white rounded-2xl flex flex-col items-center sm:gap-9 gap-6 shadow-md sm:p-10 p-7 hover:scale-110 transition-all">
          <img src={featureIcon1} alt="" className="" />
          <span className="text-black font-bold text-lg text-center">
            ثبت‌نام کنید و پروفایل خود را بسازید
          </span>
          <p className="text-sm text-gray-400 text-center">
            با تکمیل فرایند ثبتنام و ایجاد پروفایل کامل میتوانید مشاغلی که
            متناسب با شرایط شما هست را پیدا کنید.
          </p>
        </div>
        <div className="bg-white rounded-2xl flex flex-col items-center sm:gap-9 gap-6 shadow-md sm:p-10 p-7 hover:scale-110 transition-all">
          <img src={featureIcon2} alt="" className="" />
          <span className="text-black font-bold text-lg text-center">
            رزومه خود را آپلود کنید
          </span>
          <p className="text-sm text-gray-400 text-center">
            میتوانید در تربت کار با کمترین زمان و به راحتی رزومه خود را بسازید.
          </p>
        </div>
        <div className="bg-white rounded-2xl flex flex-col items-center sm:gap-9 gap-6 shadow-md sm:p-10 p-7 hover:scale-110 transition-all">
          <img src={cashingIcon} alt="" className="" />
          <span className="text-black font-bold text-lg text-center">
            کسب درآمد کنید
          </span>
          <p className="text-sm text-gray-400 text-center">
            تربت کار به شما کمک میکند تا فقط با چند کلیک به راحتی کسب درآمد کنید
          </p>
        </div>
      </div>
    </div>
  );
}
