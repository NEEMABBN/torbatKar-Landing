import React from "react";
import CategorySectionItem from "../../../Components/CategorySectionItem";
import KarfarmaImage from "../../../assets/Images/KarFarma.png";
import KarJooImage from "../../../assets/Images/KarJoo.png";

export default function CategorySection() {
  return (
    <div className="container mx-auto grid sm:grid-cols-2 grid-cols-1 sm:px-0 px-7 sm:gap-12 gap-5">
      <CategorySectionItem
        title="کارفرما هستید؟"
        image={KarfarmaImage}
        description="به سادگی افراد متخصص را برای پروژه‌ی خود پیدا کنید پس از ثبت پرو‌ژه در تربت کار از صدها فریلنسر پیشنهاد دریافت می‌کنید و با بررسی نمونه کارها، می‌توانید بهترین پیشنهاد را انتخاب کنید."
        btn="ثبت‌نام بعنوان کارفرما"
      />
      <CategorySectionItem
        title="کارجو هستید؟"
        image={KarJooImage}
        description="تربت کار به شما کمک میکند تا با داشتن یک رزومه کاری تاثیر گذار به راحتی از طریق جستجو بین هزاران پروژه براساس مهارت هایتان ، پروژه مورد نظرتان را پیدا و برای آن پیشنهاد ارسال کنید."
        btn="ثبت‌نام بعنوان کارجو"
      />
    </div>
  );
}
