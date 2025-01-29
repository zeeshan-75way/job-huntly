import {
  FaPencilRuler,
  FaChartLine,
  FaBriefcase,
  FaLaptopCode,
  FaCog,
  FaBuilding,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Design",
    jobs: 235,
    icon: (
      <FaPencilRuler
        fontSize={40}
        className="group-hover:text-white text-[#4640DE]"
      />
    ),
  },
  {
    name: "Sales",
    jobs: 756,
    icon: (
      <FaChartLine
        fontSize={40}
        className="group-hover:text-white text-[#4640DE]"
      />
    ),
  },
  {
    name: "Marketing",
    jobs: 140,
    icon: (
      <FaBriefcase
        fontSize={40}
        className="group-hover:text-white text-[#4640DE]"
      />
    ),
  },
  {
    name: "Finance",
    jobs: 325,
    icon: (
      <FaBuilding
        fontSize={40}
        className="group-hover:text-white text-[#4640DE]"
      />
    ),
  },
  {
    name: "Technology",
    jobs: 436,
    icon: (
      <FaLaptopCode
        fontSize={40}
        className="group-hover:text-white text-[#4640DE]"
      />
    ),
  },
  {
    name: "Engineering",
    jobs: 542,
    icon: (
      <FaCog fontSize={40} className="group-hover:text-white text-[#4640DE]" />
    ),
  },
  {
    name: "Business",
    jobs: 211,
    icon: (
      <FaBriefcase
        fontSize={40}
        className="group-hover:text-white text-[#4640DE]"
      />
    ),
  },
  {
    name: "Human Resource",
    jobs: 346,
    icon: (
      <FaUsers
        fontSize={40}
        className="group-hover:text-white text-[#4640DE]"
      />
    ),
  },
];

const Categories = () => {
  return (
    <section className="p-12 w-11/12 mx-auto flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-5xl text-gray-900 mb-4 clash-display font-semibold">
          Explore by <span className="text-custom-blue">category</span>
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
      <div className="flex gap-x-8 flex-wrap gap-y-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group h-[14rem]  justify-between w-full lg:w-[23rem] p-8 border border-gray-200 cursor-pointer hover:b shadow-sm flex flex-col transition hover:bg-blue-600 hover:text-white"
          >
            <div className="text-3xl mb-3 text-white">{category.icon}</div>
            <div className="">
              <h3 className=" !font-semibold clash-display  text-2xl">
                {category.name}
              </h3>
              <div className="flex justify-between items-center text-lg">
                <p className="text-sm">{category.jobs} jobs available</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
