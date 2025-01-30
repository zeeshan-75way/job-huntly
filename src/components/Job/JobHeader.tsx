import { Breadcrumbs, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { IoMdShare } from "react-icons/io";
export default function JobHeader() {
  return (
    <div className="md:p-12 p-6 w-11/12 mx-auto flex flex-col gap-y-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs aria-label="breadcrumb" className="mb-6">
        <Link to="/" className="text-gray-500 hover:text-gray-700">
          Home
        </Link>
        <Link to="/companies" className="text-gray-500 hover:text-gray-700">
          Companies
        </Link>
        <Link
          to="/companies/nomad"
          className="text-gray-500 hover:text-gray-700"
        >
          Nomad
        </Link>
        <Typography color="text.primary">Social Media Assistant</Typography>
      </Breadcrumbs>

      {/* Job Header Card */}
      <div className="bg-white  shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between">
          <div className="flex md:flex-row flex-col md:items-center gap-4">
            {/* Company Logo */}
            <div className="w-16 h-16 bg-[#4263EB] rounded-lg flex items-center justify-center">
              <span className="text-white text-3xl font-bold">S</span>
            </div>

            {/* Job Details */}
            <div>
              <h1 className="text-2xl font-semibold  mb-1 !clash-display">
                Social Media Assistant
              </h1>
              <div className="flex md:flex-row flex-col  md:items-center md:gap-2 text-gray-600 epilogue-400">
                <span>Stripe</span>
                <span className="text-gray-300">•</span>
                <span>Paris, France</span>
                <span className="text-gray-300">•</span>
                <span>Full-Time</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button   size="large" aria-label="share">
              <IoMdShare fontSize={24} className="text-gray-600" />
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />

            <Button className="!epilogue-700" variant="contained" size="large">
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
