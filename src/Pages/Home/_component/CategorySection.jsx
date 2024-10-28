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
        description="به سادگی افراد متخصص را برای پروژه‌ی خود پیدا کنید پس از ثبت پرو‌ژه در تربت کار از صدها فریلنسر پیشنهاد دریافت می‌کنید و با بررسی نمونه کارها، می‌توانید بهترین پیشنهاد را انتخاب کنید."
        btn="ثبت‌نام بعنوان کارفرما"
      />
      <CategorySectionItem
        title="کارجو هستید؟"
        icon={<PiStudentBold />}
        description="تربت کار به شما کمک میکند تا با داشتن یک رزومه کاری تاثیر گذار به راحتی از طریق جستجو بین هزاران پروژه براساس مهارت هایتان ، پروژه مورد نظرتان را پیدا و برای آن پیشنهاد ارسال کنید."
        btn="ثبت‌نام بعنوان کارجو"
      />
    </div>
  );
}
