import { Button } from "@mui/material";
import { ReactComponent as Dashboard } from "../../assets/Dashboard.svg";
const CTASection = () => {
  return (
    <div className=" md:p-12 p-6 flex  w-11/12 mx-auto relative">
      <div className="absolute bg-[#F8F8FD] md:h-30 h-24 md:w-[15rem] w-[12rem] -rotate-40 md:-left-5 -left-10 md:top-1  -top-5"></div>
      <div className="absolute bg-[#F8F8FD] md:h-30 w-[15rem] -rotate-40 -right-5 bottom-1"></div>
      <div className="bg-primary-blue w-full overflow-hidden md:aspect-[16/4] min-h-[24rem] flex md:flex-row flex-col justify-between items-center p-6 ">
        <div className=" text-white flex   clash-display flex-col px-16 py-6 gap-y-6">
          <div className="text-5xl font-semibold">
            <p>Start posting</p>
            <p>jobs today</p>
          </div>
          <p>Start posting jobs for only $10.</p>
          <Button
            variant="contained"
            className="!w-fit  !epilogue-700"
            sx={{ backgroundColor: "white", color: "#4640DE" }}
          >
            Sign Up For Free
          </Button>
        </div>
        <div className="md:!right-20 relative md:!top-8 top-10">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
