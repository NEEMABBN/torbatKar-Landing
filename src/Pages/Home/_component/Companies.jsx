import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
            slidesPerView: 5,
          },
        }}
        modules={[Pagination]}
        className="mySwiper py-7"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/src/assets/Images/CompanyProfile1.png"
              alt=""
              className=""
            />
            <span className="text-black font-bold">شال و روسری مهراد</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/src/assets/Images/CompanyProfile2.png"
              alt=""
              className=""
            />
            <span className="text-black font-bold">برگ بنفش</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/src/assets/Images/CompanyProfile3.png"
              alt=""
              className=""
            />
            <span className="text-black font-bold">عروس کالا</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/src/assets/Images/CompanyProfile4.png"
              alt=""
              className=""
            />
            <span className="text-black font-bold">مانی مد</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/src/assets/Images/CompanyProfile5.png"
              alt=""
              className=""
            />
            <span className="text-black font-bold">سالن زیبایی نورا</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/src/assets/Images/CompanyProfile6.png"
              alt=""
              className=""
            />
            <span className="text-black font-bold">نمایشگاه چوب کاج</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/src/assets/Images/CompanyProfile7.png"
              alt=""
              className=""
            />
            <span className="text-black font-bold">بیمه پاسارگاد</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
