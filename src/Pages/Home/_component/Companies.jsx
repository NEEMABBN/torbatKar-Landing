import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CompanyProfile1 from "../../../assets/Images/CompanyProfile1.png";
import CompanyProfile2 from "../../../assets/Images/CompanyProfile2.png";
import CompanyProfile3 from "../../../assets/Images/CompanyProfile3.png";
import CompanyProfile4 from "../../../assets/Images/CompanyProfile4.png";
import CompanyProfile5 from "../../../assets/Images/CompanyProfile5.png";
import CompanyProfile6 from "../../../assets/Images/CompanyProfile6.png";
import CompanyProfile7 from "../../../assets/Images/CompanyProfile7.png";

export default function Companies() {
  return (
    <div className="w-full flex items-center">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        modules={[Pagination]}
        className="mySwiper py-7"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src={CompanyProfile1}
              alt=""
              className="rounded-full w-[100px] h-[100px]"
            />
            <span className="text-black font-bold">شال و روسری مهراد</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src={CompanyProfile2}
              alt=""
              className="rounded-full w-[100px] h-[100px]"
            />
            <span className="text-black font-bold">برگ بنفش</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src={CompanyProfile3}
              alt=""
              className="rounded-full w-[100px] h-[100px]"
            />
            <span className="text-black font-bold">عروس کالا</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src={CompanyProfile4}
              alt=""
              className="rounded-full w-[100px] h-[100px]"
            />
            <span className="text-black font-bold">مانی مد</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src={CompanyProfile5}
              alt=""
              className="rounded-full w-[100px] h-[100px]"
            />
            <span className="text-black font-bold">سالن زیبایی نورا</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src={CompanyProfile6}
              alt=""
              className="rounded-full w-[100px] h-[100px]"
            />
            <span className="text-black font-bold">نمایشگاه چوب کاج</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src={CompanyProfile7}
              alt=""
              className="rounded-full w-[100px] h-[100px]"
            />
            <span className="text-black font-bold">بیمه پاسارگاد</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
