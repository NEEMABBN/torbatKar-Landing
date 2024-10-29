import React, { useEffect, useState } from "react";
import EachCommentBox from "../../../Components/EachCommentBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LinearIcon from "../../../assets/Images/Linearrr.svg";
import CommentIcon from "../../../assets/Images/CommentIcon.svg";

export default function CommentSection() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState(0);

  const name = "CommentList";
  const url = `https://torbatkar.ir/api/api.php?ListType=${name}`;
  useEffect(() => {
    getComment();
  }, []);

  const getComment = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedData = await response.json();
      setData(fetchedData);
      setLoading(false);
      setRate(fetchedData);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-start bg-Primary relative lg:mt-52 mt-0 px-4 py-24 overflow-hidden">
      <img
        src={LinearIcon}
        alt=""
        className="absolute sm:top-[-22rem] top-[-9rem] left-0 rotate-12"
      />
      <img
        src={LinearIcon}
        alt=""
        className="absolute sm:bottom-[-12rem] bottom-[-6rem] sm:right-[-30rem] rotate-12"
      />
      <div className="flex items-center gap-3 md:mx-20">
        <img src={CommentIcon} alt="" className="" />
        <span className="sm:text-2xl text-xl text-white font-bold">
          نظرات مشتریان ما
        </span>
      </div>
      <div className="w-full flex items-center">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={40}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            830: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper py-11"
        >
          {loading ? (
            <div className="w-full flex items-start gap-7">
              <span className="text-white text-5xl animate-pulse">
                در حال بارگذاری...
              </span>
            </div>
          ) : data.length > 0 ? (
            data.map((item, index) => (
              <SwiperSlide key={index}>
                <EachCommentBox
                  key={index}
                  BusinessName={item.BusinessName}
                  EmployerName={item.EmployerName}
                  Message={item.Message}
                  Profile={item.Profile}
                  Rate={item.Rate}
                />
              </SwiperSlide>
            ))
          ) : (
            ""
          )}
        </Swiper>
      </div>
    </div>
  );
}
