import React from "react";
import HeaderComponent from "./_component/HeaderComponent";
import Companies from "./_component/Companies";
import SuggestedJobs from "./_component/SuggestedJobs";
import CategorySection from "./_component/CategorySection";
import JobOpportunities from "./_component/JobOpportunities";
import WebDescription from "./_component/WebDescription";
import CommentSection from "./_component/CommentSection";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-white gap-10">
      <Helmet>
        <title>Torbat-Kar</title>
        <meta
          name="description"
          content="تربت کار یک سایت کاریابی ، برقراری یک ارتباط ساده بین کارجو و کارفرما ، ثبت آگهی آسان ، (ثبت اولین آگهی رایگان هست و میتوانیم با ثبت آگهی رایگان سئو کنیم) ثبت آگهی رایگان، کارجو میتونه موقعیت شغلی های مرتبط با حرفه خودش رو ببینه ، کارفرما میتونه پنل اختصاصی داشته باشه که مثل یک صفحه وبسایت هست ، مرجع کاریابی تربت حیدریه ، مرجع رسمی کاریابی تربت حیدریه"
        />
        <meta
          name="keywords"
          content="تربت کار , استخدام تربت , استخدام تربت حیدریه , استخدامی تربت , استخدامی تربت حیدریه , مشاغل تربت , مشاغل تربت حیدریه , کاریابی , کاریابی در مشهد , کاریاببی در تربت حیدریه , کاریابی تربت , دنبال کار میگردم , وبسایت های کاریابی , سایت های کاریابی , سایت های کاریابی در تربت حیدریه , جذب نیرو در مشهد , جذب نیرو در تربت حیدریه"
        />
      </Helmet>
      <HeaderComponent />
      <Companies />
      <SuggestedJobs />
      <CategorySection />
      <JobOpportunities />
      <WebDescription />
      <CommentSection />
    </div>
  );
}
