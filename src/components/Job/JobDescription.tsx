import { Divider, LinearProgress } from "@mui/material";
import { BsCheckCircleFill } from "react-icons/bs";

export default function JobDescription() {
  return (
    <div className="md:p-12 p-6 w-11/12 mx-auto flex flex-col gap-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 epilogue-400">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Description */}
          <section className="mb-8">
            <h2 className="text-3xl clash-display font-semibold mb-4">
              Description
            </h2>
            <p className="text-gray-600">
              Stripe is looking for Social Media Marketing expert to help manage
              our online networks. You will be responsible for monitoring our
              social media channels, creating content, finding effective ways to
              engage the community and incentivize others to engage on our
              channels.
            </p>
          </section>

          {/* Responsibilities */}
          <section className="mb-8">
            <h2 className="text-3xl mb-4 clash-display font-semibold">
              Responsibilities
            </h2>
            <ul className="space-y-3">
              {[
                "Community engagement to ensure that is supported and actively represented online",
                "Focus on social media content development and publication",
                "Marketing and strategy support",
                "Stay on top of trends on social media platforms, and suggest content ideas to the team",
                "Engage with online communities",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <BsCheckCircleFill className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Who You Are */}
          <section className="mb-8">
            <h2 className="text-3xl clash-display font-semibold mb-4">
              Who You Are
            </h2>
            <ul className="space-y-3">
              {[
                "You get energy from people and building the ideal work environment",
                "You have a sense for beautiful spaces and office experiences",
                "You are a confident office manager, ready for added responsibilities",
                "You're detail-oriented and creative",
                "You're a growth marketer and know how to run campaigns",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <BsCheckCircleFill className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Nice-To-Haves */}
          <section>
            <h2 className="text-3xl clash-display font-semibold mb-4">
              Nice-To-Haves
            </h2>
            <ul className="space-y-3">
              {[
                "Fluent in English",
                "Project management skills",
                "Copy editing skills",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <BsCheckCircleFill className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-3xl clash-display font-semibold mb-6">
              About this role
            </h2>

            {/* Application Progress */}
            <div className="mb-6 bg-[#F8F8FD] p-4">
              <div className="flex justify-between text-sm mb-2">
                <span>5 applied</span>
                <span className="text-gray-500">of 10 capacity</span>
              </div>
              <LinearProgress
                variant="determinate"
                value={50}
                className="!h-2 rounded-full"
                sx={{
                  backgroundColor: "#E5EDFF",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#56CDAD",
                  },
                }}
              />
            </div>

            {/* Job Details */}
            <div className="space-y-4 mb-8 epilogue-400 text-base">
              <div className="flex justify-between">
                <span className="text-gray-600 ">Apply Before</span>
                <span className="font-medium">July 31, 2021</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Job Posted On</span>
                <span className="font-medium">July 1, 2021</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Job Type</span>
                <span className="font-medium">Full Time</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Salary</span>
                <span className="font-medium">$75k-95k USD</span>
              </div>
            </div>

            <Divider />
            {/* Categories */}
            <div className="my-8">
              <h3 className="text-3xl clash-display font-semibold mb-3">
                Categories
              </h3>
              <div className="flex gap-2 epilogue-500 text-sm">
                <span className="px-3 py-1 bg-[#EB85331A] text-[#FFB836] rounded-full text-sm ">
                  Marketing
                </span>
                <span className="px-3 py-1 bg-[#56CDAD1A] text-[#56CDAD] rounded-full text-sm">
                  Design
                </span>
              </div>
            </div>
            <Divider />
            {/* Required Skills */}
            <div>
              <h3 className="text-3xl clash-display font-semibold my-8">
                Required Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Project Management",
                  "Copywriting",
                  "Social Media Marketing",
                  "English",
                  "Copy Editing",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#F8F8FD] text-[#4640DE] epilogue-400 font-normal  text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
