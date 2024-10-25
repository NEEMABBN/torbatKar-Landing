import React from "react";

export default function JobOpportunities() {
  return (
    <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-3 px-5 sm:my-36 my-16">
      <div className="w-full flex flex-col items-center">
        <div className="flex items-start gap-4">
          <div className="w-7 h-[130px] md:block hidden rounded-full bg-gradient-to-b from-[#FFC947] to-white"></div>
          <div className="md:w-auto w-full flex flex-col md:items-start items-center gap-6">
            <h2 className="text-black font-extrabold md:text-3xl sm:text-2xl text-xl">
              فرصت‌های شغلی در تربت حیدریه
            </h2>
            <p className="text-sm leading-8 md:text-start text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با
              تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              از صنعت چاپ
            </p>
          </div>
        </div>
        <img src="/src/assets/Images/AnalysIcon.png" alt="" className="" />
      </div>

      <div className="w-full flex flex-col md:items-start items-center lg:px-32 md:px-10 py-10 gap-16">
        <div className="flex items-center gap-4">
          <img src="/src/assets/Images/WebDesign.svg" alt="" className="" />
          <h3 className="sm:text-xl text-base font-bold text-black">
            طراحی سایت
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <img src="/src/assets/Images/target.svg" alt="" className="" />
          <h3 className="sm:text-xl text-base font-bold text-black">
            فروش و بازاریابی
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/src/assets/Images/support_concultant.svg"
            alt=""
            className=""
          />
          <h3 className="sm:text-xl text-base font-bold text-black">
            منشی و مشاور
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <img src="/src/assets/Images/service.svg" alt="" className="" />
          <h3 className="sm:text-xl text-base font-bold text-black">
            طراحی گرافیک
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/src/assets/Images/copywriters_articles.svg"
            alt=""
            className=""
          />
          <h3 className="sm:text-xl text-base font-bold text-black">
            تایپ سریع
          </h3>
        </div>
      </div>
    </div>
  );
}
