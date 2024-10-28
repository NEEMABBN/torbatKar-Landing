import React, { useEffect, useState } from "react";
import { JobsPost } from "./JobsPost";
import { FaChevronLeft } from "react-icons/fa";
import LazyLoadTemplate from "../../../Components/LazyLoadTemplate";
import { Link } from "react-router-dom";

export default function SuggestedJobs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center gap-12 sm:mb-28 mb-14 sm:px-0 px-3">
      <h2 className="md:text-4xl sm:text-2xl text-xl text-Primary font-bold">
        مشاغل پیشنهادی در تربت‌کار
      </h2>
      <p className="md:text-start text-center sm:text-base text-sm">
        در تربت کار  شغلی را پیدا کنید که شرایط زندگی شما را فراهم می کند.
        استخدام در تربت حیدریه آسان شد
      </p>
      <div className="w-full flex flex-col items-center gap-7">
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-6">
          {loading ? (
            <>
              <LazyLoadTemplate />
              <LazyLoadTemplate />
              <LazyLoadTemplate />
              <LazyLoadTemplate />
              <LazyLoadTemplate />
              <LazyLoadTemplate />
              <LazyLoadTemplate />
              <LazyLoadTemplate />
            </>
          ) : data.length > 0 ? (
            data.map((item) => (
              <JobsPost
                key={item.ID}
                title={item.post_title}
                time={item.job_type_name}
                showDetail={item.job_link}
                price={
                  item.job_salary == 0 || item.job_salary == null ? (
                    <>
                      <span className="">{item.job_salary_type}</span>
                    </>
                  ) : (
                    <div className="flex items-center text-sm font-bold text-Primary sm:gap-3 gap-2">
                      <span className="">
                        {parseFloat(item.job_salary).toLocaleString("fa-IR")}
                      </span>
                      <span className="">تومان / </span>
                      <span className="">{item.job_salary_type}</span>
                    </div>
                  )
                }
                category={item.job_category_name}
                location={item.job_location_name}
              />
            ))
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex justify-end">
          <Link
            to="https://torbatkar.ir/jobs/"
            className="flex items-center gap-1 text-black hover:text-Primary transition-all font-bold sm:text-base text-sm"
          >
            مشاهده همه
            <FaChevronLeft className="sm:text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
}
