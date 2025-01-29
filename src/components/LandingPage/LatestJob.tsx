import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { ReactComponent as Job1 } from "../../assets/Revolut.svg";
import { ReactComponent as Job2 } from "../../assets/Dropbox.svg";
import { ReactComponent as Job3 } from "../../assets/Pitch.svg";
import { ReactComponent as Job4 } from "../../assets/Blinkist.svg";
import { ReactComponent as Job5 } from "../../assets/ClassPass.svg";
import { ReactComponent as Job6 } from "../../assets/Canva.svg";
import { ReactComponent as Job7 } from "../../assets/GoDaddy.svg";
import { ReactComponent as Job8 } from "../../assets/Twitter.svg";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const jobs = [
  {
    svg: <Job1 />,
    title: "Email Marketing",
    company: "Revolut • Madrid, Spain",
    type: "Full Time",
    tags: ["Marketing", "Design"],
  },
  {
    svg: <Job2 />,
    title: "Brand Designer",
    company: "Dropbox • San Francisco, US",
    type: "Full Time",
    tags: ["Design", "Business"],
  },
  {
    svg: <Job3 />,
    title: "Email Marketing",
    company: "Pitch • Berlin, Germany",
    type: "Full Time",
    tags: ["Marketing"],
  },
  {
    svg: <Job4 />,
    title: "Visual Designer",
    company: "Blinkist • Granada, Spain",
    type: "Full Time",
    tags: ["Design"],
  },
  {
    svg: <Job5 />,
    title: "Product Designer",
    company: "ClassPass • Manchester, UK",
    type: "Full Time",
    tags: ["Marketing", "Design"],
  },
  {
    svg: <Job6 />,
    title: "Lead Designer",
    company: "Canva • Ontario, Canada",
    type: "Full Time",
    tags: ["Business", "Design"],
  },
  {
    svg: <Job7 />,
    title: "Brand Strategist",
    company: "GoDaddy • Marseille, France",
    type: "Full Time",
    tags: ["Marketing"],
  },
  {
    svg: <Job8 />,
    title: "Data Analyst",
    company: "Twitter • San Diego, US",
    type: "Full Time",
    tags: ["Technology"],
  },
];

const LatestJobs: React.FC = () => {
  return (
    <div className="md:p-12 p-6 w-11/12 mx-auto flex flex-col">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-5xl text-gray-900 mb-4 clash-display font-semibold">
          Latest <span className="text-[#26A4FF]">Jobs Open</span>
        </h2>
        <div className="md:mt-6 md:text-right">
          <Link
            to={"/"}
            className="text-blue-500 font-semibold hover:underline"
          >
            Show all jobs →
          </Link>
        </div>
      </div>

      {/* Job List Grid (2 Columns, 4 Rows) */}
      <div className="flex gap-x-8 flex-wrap gap-y-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="p-6 bg-white border lg:w-[40vw] w-full border-[#D6DDEB] flex items-center gap-4 transition-all duration-300  cursor-pointer"
          >
            {/* Left: SVG Icon */}
            <div className="w-20 h-20">{job.svg}</div>

            {/* Right: Job Info */}
            <div className="flex flex-col space-y-2">
              {/* Job Title */}
              <h3 className="text-xl text-[#25324B] font-semibold transition-all duration-300 ">
                {job.title}
              </h3>

              {/* Company & Location */}
              <span className="text-[#515B6F] font-normal text-base transition-all duration-300 ">
                {job.company}
              </span>

              <div className="flex gap-x-2">
                {/* Full Time Text */}
                <span className="bg-[#56CDAD1A] text-[#56CDAD] px-3 py-1 text-sm font-medium rounded-full  transition-all duration-300 ">
                  {job.type}
                </span>
                <Divider orientation="vertical" variant="middle" flexItem />

                {/* Job Tags */}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        tag === "Marketing"
                          ? "bg-[#EB85331A] text-[#FFB836]"
                          : tag === "Design"
                          ? "bg-[#56CDAD1A] text-[#56CDAD]"
                          : tag === "Business"
                          ? "bg-[#4640DE1A] text-[#4640DE]"
                          : "bg-[#EB85331A] text-[#FF6550]"
                      } transition-all duration-300 `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
