import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { RiFacebookFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/Images/Logo.webp";
import Vertical1 from "../assets/Images/Vertical container.png";
import Vertical2 from "../assets/Images/Vertical container2.png";

export default function Footer() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-10 mt-16 mb-5">
      <div className="w-full flex sm:justify-start justify-center">
        <img src={logo} alt="" className="sm:w-[130px] w-[110px]" />
      </div>
      <div className="w-full flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 items-center justify-between">
        <div className="lg:w-auto w-full flex flex-col lg:items-start items-center gap-4 sm:px-0 px-5">
          <div className="flex sm:flex-row flex-col items-center gap-1">
            <span className="text-black font-bold">آدرس :</span>
            <span className="text-sm text-gray-500 sm:text-start text-center">
              {" "}
              خراسان رضوی، تربت حیدریه، خیابان کاشانی، مجتمع ولی عصر، طبقه سوم،
              واحد B6
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-black font-bold">شماره تماس :</span>
            <a
              href="tel:+5152278612"
              dir="ltr"
              className="text-sm text-gray-500"
            >
              52278612-051
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-black font-bold">ایمیل :</span>
            <a
              href="mailto:info@torbatkar.ir"
              className="text-sm text-gray-500"
            >
              info@torbatkar.ir
            </a>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-Primary font-bold sm:text-base text-sm sm:text-start text-center">
              برای دریافت آخرین اخبار و مشاغل جدید، شماره خود را وارد کنید
            </span>
            <div className="w-full flex items-center sm:gap-3 gap-2">
              <input
                type="number"
                className="bg-Base outline-Primary rounded-xl transition-all sm:text-base text-sm w-full py-2 px-4 text-Primary"
                placeholder="شماره همراه"
              />
              <button className="bg-Primary text-white px-5 py-2 rounded-xl">
                ثبت
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-auto w-full grid sm:grid-cols-4 grid-cols-2 sm:gap-12 gap-8">
          <ul className="flex flex-col sm:items-start items-center gap-2">
            <li className="text-black font-bold pb-2">تربت کار</li>
            <li>
              <Link
                to="https://torbatkar.ir/about/"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                درباره ما
              </Link>
            </li>
            <li>
              <Link
                to="https://torbatkar.ir/contact/"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                تماس با ما
              </Link>
            </li>
            <li>
              <Link
                to="https://torbatkar.ir/blog/"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                اتاق خبر
              </Link>
            </li>
            <li>
              <Link
                to="https://torbatkar.ir/terms/"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                قوانین و مقررات
              </Link>
            </li>
            <li>
              <Link
                to="https://torbatkar.ir/faq/"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                سوالات متداول
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col sm:items-start items-center gap-2">
            <li className="text-black font-bold pb-2">برای کارجویان</li>
            <li>
              <Link
                to="https://torbatkar.ir/user-dashboard/"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                حساب کاربری
              </Link>
            </li>
            <li>
              <Link
                to="https://torbatkar.ir/alerts-jobs/"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                هشدار‌های شغلی
              </Link>
            </li>
            <li>
              <Link
                to="https://torbatkar.ir/job/"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                راهنمای کار با سایت
              </Link>
            </li>
            <li>
              <Link
                to="https://torbatkar.ir/about/"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                درباره ما
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col sm:items-start items-center gap-2">
            <li className="text-black font-bold pb-2">برای کارفرمایان</li>
            <li>
              <Link
                to="https://torbatkar.ir/employer/"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                همه کارفرمایان
              </Link>
            </li>
            <li>
              <Link
                to="https://torbatkar.ir/#"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                داشبورد کارفرما
              </Link>
            </li>
            <li>
              <Link
                to="https://torbatkar.ir/submit-job/"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                ارسال شغل
              </Link>
            </li>
            <li>
              <Link
                to="https://torbatkar.ir/pricing/"
                className="text-sm text-gray-500 hover:text-black transition-all"
              >
                پکیج‌های شغلی
              </Link>
            </li>
          </ul>
          <div className="flex flex-col items-center gap-5">
            <img src={Vertical1} alt="" className="" />
            <img src={Vertical2} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="w-full flex sm:flex-row flex-col-reverse sm:gap-0 gap-6 items-center justify-between sm:mt-7">
        <span className="text-gray-500 sm:text-base text-sm">
          تمامی حقوق برای تربت‌کار محفوظ است
        </span>
        <div className="flex items-center gap-6">
          <Link to="https://torbatkar.ir/#" className="text-Primary text-2xl">
            <FaTwitter />
          </Link>
          <Link to="https://torbatkar.ir/#" className="text-Primary text-2xl">
            <FaInstagram />
          </Link>
          <Link to="https://torbatkar.ir/#" className="text-Primary text-2xl">
            <FiLinkedin />
          </Link>
          <Link to="https://torbatkar.ir/#" className="text-Primary text-2xl">
            <RiFacebookFill />
          </Link>
        </div>
      </div>
    </div>
  );
}
