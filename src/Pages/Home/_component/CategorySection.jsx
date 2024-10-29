import React from "react";
import CategorySectionItem from "../../../Components/CategorySectionItem";
import { MdEngineering } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export default function CategorySection() {
  return (
    <div className="container mx-auto grid sm:grid-cols-2 grid-cols-1 sm:px-0 px-7 lg:gap-24 md:gap-10 gap-5">
      <CategorySectionItem
        title="کارفرما هستید؟"
        icon={<MdEngineering />}
        description="بهترین نیروی کار را سریع و آسان پیدا کنید! فرصت معرفی آگهی شغلی خود به هزاران کارجو را از دست ندهید."
        btn="ثبت‌نام به عنوان کارفرما"
      />
      <CategorySectionItem
        title="کارجو هستید؟"
        icon={<PiStudentBold />}
        description="به شغل رویایی خود نزدیک شوید! با ثبت نام در سایت، به مجموعه‌ای از فرصت‌های شغلی دسترسی پیدا کنید و مسیر حرفه‌ای خود را آغاز کنید."
        btn="ثبت‌نام به عنوان کارجو"
      />
    </div>
  );
}
