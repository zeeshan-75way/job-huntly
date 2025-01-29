import { Button, Divider, TextField } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col gap-y-6">
          <h2 className="text-white text-lg red-hat-700 font-semibold flex items-center gap-x-4">
            <Logo />
            JobHuntly
          </h2>
          <p className="mt-2 text-sm epilogue-400">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-white text-lg font-semibold epilogue-500">
            About
          </h3>
          <ul className="mt-2 space-y-2 text-sm epilogue-400">
            <li>
              <Link to="#" className="hover:underline">
                Companies
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Terms
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Advice
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-white text-lg font-semibold epilogue-500">
            Resources
          </h3>
          <ul className="mt-2 space-y-2 text-sm epilogue-400">
            <li>
              <Link to="#" className="hover:underline">
                Help Docs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Guide
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Updates
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-y-6">
          <h3 className="text-white text-lg font-semibold epilogue-500">
            Get job notifications
          </h3>
          <div className="flex flex-col leading-0">
            <p className="mt-2  epilogue-400 text-base">
              The latest job news, articles, sent to
            </p>
            <p className="  epilogue-400 text-base">your inbox weekly.</p>
          </div>
          <div className="mt-4 flex gap-x-2">
            <TextField
              variant="outlined"
              placeholder="Email Address"
              slotProps={{
                input: {
                  sx: {
                    backgroundColor: "white",
                    borderRadius: "0px",
                  },
                },
              }}
            />
            <Button variant="contained" className="!epilogue-700" size="large">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <Divider className="!border-gray-700 !my-8" />
      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center epilogue-500 text-base">
        <p className="text-sm">2021 @ JobHuntly. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0"></div>
      </div>
    </footer>
  );
}
