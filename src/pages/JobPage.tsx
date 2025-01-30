import React from "react";
import JobHeader from "../components/Job/JobHeader";
import JobDescription from "../components/Job/JobDescription";
import PerksAndBenefits from "../components/Job/PerksAndBenefits";

type Props = {};

const JobPage = (props: Props) => {
  return (
    <div className="md:p-6 bg-[#F8F8FD]">
      <JobHeader />
      <JobDescription />
      <PerksAndBenefits />
    </div>
  );
};

export default JobPage;
