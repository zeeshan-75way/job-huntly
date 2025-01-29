import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Button, Divider } from "@mui/material";
const Navbar = () => {
  return (
    <div className=" h-[5rem] w-10/12 mx-auto flex justify-between items-center">
      <div className="text-2xl flex justify-between basis-1/3 items-center">
        <div className="flex gap-x-2 red-hat-400 items-center ">
          <Logo />
          <Link to={"/"}>
            <h1 className="red-hat-700 md:text-xl text-base">Job Huntly</h1>
          </Link>
        </div>
        <div className=" md:flex hidden gap-x-4 epilogue-500 text-base justify-center items-center text-gray-500 ">
          <Link to={"/jobs"}>Find Jobs</Link>
          <Link to={"/companies"}>Browse Companies</Link>
        </div>
      </div>
      <div className="flex gap-x-4">
        <Button className="!epilogue-700 !text-lg" size="large" variant="text">
          Login
        </Button>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button className="!epilogue-700 !text-lg" size="large" variant="contained">
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
