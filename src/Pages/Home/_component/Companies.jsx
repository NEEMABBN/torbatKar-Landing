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
import EachCompanyPost from "../../../Components/EachCompanyPost";

export default function Companies() {
  return (
    <div className="container mx-auto flex flex-col items-center mt-10">
      <h2 className="md:text-4xl sm:text-2xl text-xl text-Primary font-bold">
        اعتماد کنندگان به ما
      </h2>
      <div className="w-full flex items-center px-2">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper !py-16"
        >
          <SwiperSlide>
            <EachCompanyPost
              image={CompanyProfile1}
              jobTitle="شال و روسری مهراد"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EachCompanyPost image={CompanyProfile2} jobTitle="برگ بنفش" />
          </SwiperSlide>
          <SwiperSlide>
            <EachCompanyPost image={CompanyProfile3} jobTitle="عروس کالا" />
          </SwiperSlide>
          <SwiperSlide>
            <EachCompanyPost image={CompanyProfile4} jobTitle="مانی مد" />
          </SwiperSlide>
          <SwiperSlide>
            <EachCompanyPost
              image={CompanyProfile5}
              jobTitle="سالن زیبایی نورا"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EachCompanyPost
              image={CompanyProfile6}
              jobTitle="نمایشگاه چوب کاج"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EachCompanyPost image={CompanyProfile7} jobTitle="بیمه پاسارگار" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
