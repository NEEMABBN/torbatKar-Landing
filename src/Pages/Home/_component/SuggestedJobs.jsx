import React, { useEffect, useState } from "react";
import JobsPost from "./JobsPost";
import { FaChevronLeft } from "react-icons/fa";

export default function SuggestedJobs() {
  const [data, setData] = useState([]);

  const name = "JobList";
  const url = `https://torbatkar.ir/api/api.php?ListType=${name}`;
  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedData = await response.json();
      setData(fetchedData);
      console.log(data);
      // console.log(fetchedData);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center gap-12 sm:my-28 my-14 sm:px-0 px-3">
      <h2 className="md:text-4xl sm:text-2xl text-xl text-Primary font-bold">
        مشاغل پیشنهادی در تربت‌کار
      </h2>
      <p className="md:text-start text-center sm:text-base text-sm">
        در تربت کار  شغلی را پیدا کنید که شرایط زندگی شما را فراهم می کند.
        استخدام در تربت حیدریه آسان شد
      </p>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-6">
          {data.length > 0
            ? data.map((item) => (
                <JobsPost
                  key={item.ID}
                  title={item.post_title}
                  time={item.job_type_name}
                  price={
                    item.job_salary == 0 ||
                    item.job_salary == null ? (
                      <><span className="">{item.job_salary_type}</span></>
                    ) : (
                      <div className="flex items-center text-sm font-bold text-Primary sm:gap-3 gap-2">
                        <span className="">{item.job_salary}</span>
                        <span className="">تومان / </span>
                        <span className="">{item.job_salary_type}</span>
                      </div>
                    )
                  }
                  category={item.job_category_name}
                  location={item.job_location_name}
                />
              ))
            : ""}
        </div>
        <div className="w-full flex justify-end">
          <button className="flex items-center gap-1 text-black font-bold sm:text-base text-sm">
            مشاهده همه موقعیت‌های شغلی
            <FaChevronLeft className="sm:text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
