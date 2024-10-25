import React from "react";
import HeaderComponent from "./_component/HeaderComponent";
import Companies from "./_component/Companies";
import SuggestedJobs from "./_component/SuggestedJobs";
import CategorySection from "./_component/CategorySection";
import JobOpportunities from "./_component/JobOpportunities";
import WebDescription from "./_component/WebDescription";
import CommentSection from "./_component/CommentSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-white gap-10">
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
