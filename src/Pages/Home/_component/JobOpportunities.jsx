import React, { useState } from "react";
import AnalysIcon from "../../../assets/Images/AnalysIcon.png";
import JobsData from "../../../Setting/JobsData";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function JobOpportunities() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 sm:gap-36 gap-8 px-5 sm:my-36 my-16">
      <div className="w-full flex flex-col items-center">
        <div className="flex items-start gap-4">
          <div className="w-7 h-[130px] md:block hidden rounded-full bg-gradient-to-b from-[#FFC947] to-white"></div>
          <div className="md:w-auto w-full flex flex-col md:items-start items-center gap-6">
            <h2 className="text-black font-extrabold md:text-3xl sm:text-2xl text-xl">
              فرصت‌های شغلی در تربت حیدریه
            </h2>
            <p className="text-sm leading-8 md:text-start text-center">
            در بخش فرصت‌های شغلی تربت حیدریه، جدیدترین استخدام‌ها و آگهی‌های شغلی در این منطقه را مشاهده کنید. این بخش به شما کمک می‌کند تا با بررسی شرایط و مهارت‌های موردنیاز هر شغل، بهترین فرصت شغلی متناسب با تخصص خود را پیدا کنید. با ارسال درخواست، به سادگی می‌توانید اولین گام برای شروع یا پیشرفت کار در تربت حیدریه را بردارید و با کارفرمایان منطقه خود در ارتباط باشید.
            </p>
          </div>
        </div>
        <img src={AnalysIcon} alt="" className="" />
      </div>

      <div className="w-full flex flex-col md:items-start items-center py-10 sm:gap-16 gap-8">
        {JobsData.map((item, index) => (
          <div
            key={item.id}
            onClick={() => toggleAccordion(index)}
            className={`cursor-pointer w-full flex flex-col items-center rounded-2xl justify-between p-6 gap-2 overflow-hidden duration-500 transition-all ${
              openIndex === index ? "bg-blue-50 h-[100%]" : "bg-white h-[25%]"
            }`}
          >
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={item.image} alt="" className="" />
                <h3 className="text-black sm:text-2xl text-xl font-extrabold">
                  {item.title}
                </h3>
              </div>
              <button className="">
                {openIndex === index ? (
                  <FaAngleUp className="text-2xl text-Primary" />
                ) : (
                  <FaAngleDown className="text-2xl text-Primary" />
                )}
              </button>
            </div>
            {openIndex === index && (
              <div className="w-[80%] mx-auto flex flex-col items-start justify-between h-full">
                <p className="text-[#344456] text-sm leading-6">
                  {item.description}
                </p>
                <button className="text-black font-bold bg-white px-3 py-1 rounded-lg">
                  خدمات {item.title}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
