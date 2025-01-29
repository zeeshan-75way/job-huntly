import { Button } from "@mui/material";
import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const SearchBox: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex md:flex-row flex-col md:items-center space-x-4">
      {/* Search Section */}
      <div className="flex items-center space-x-2 font-medium">
        <FaSearch className="text-[#515B6F]" />
        <input
          type="text"
          placeholder="Search for jobs or companies"
          className="py-2 pl-3 pr-3 border-b-2 border-[#D6DDEB] focus:outline-none"
        />
      </div>

      {/* City Section */}
      <div className="flex gap-x-2 font-medium">
        {" "}
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-[#515B6F]" />
          <input
            type="text"
            placeholder="Enter city"
            className="py-2 pl-3 pr-3 border-b-2 border-[#D6DDEB] focus:outline-none"
          />
        </div>
        {/* Search Button Section */}
        <div className="flex items-center">
          <Button variant="contained" size="large">
            Search my job
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
