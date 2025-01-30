import { ReactComponent as Underline } from "../../assets/underline.svg";
import SearchBox from "./SearchBox";

const HeroSection = () => {
  return (
    <div className=" md:p-12 p-6 w-11/12 mx-auto flex  ">
      <div className="flex flex-col  font-bold clash-display gap-y-2">
        <h1 className="md:text-7xl text-4xl   font-bold">Discover </h1>
        <h1 className="md:text-7xl  text-4xl font-bold">more than</h1>
        <h1 className="md:text-7xl text-4xl  font-bold text-custom-blue">
          500+ Jobs
        </h1>
        <div className="!w-[12rem] md:!w-full overflow-hidden">
          <Underline />
        </div>
        <div className="text-gray-600 font-normal text-sm md:text-base">
          <p>Great platform for the job seeker that searching for </p>
          <p>new career heights and passionate about startups</p>
        </div>
        <div className="flex flex-col gap-y-6">
          <SearchBox />
          <div className="text-gray-600 flex  gap-x-1 md:text-base text-xs">
            <p className="epilogue-400">Popular</p>{" "}
            <p className=" epilogue-500">
              : UI Designer, UX Researcher, Android, Admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
