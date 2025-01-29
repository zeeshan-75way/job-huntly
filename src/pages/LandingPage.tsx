import React from "react";
import HeroSection from "../components/LandingPage/HeroSection";
import PartnerSection from "../components/LandingPage/PartnerSection";
import Categories from "../components/LandingPage/Categories";
import CTASection from "../components/LandingPage/CTASection";
import Footer from "../components/LandingPage/Footer";
import FeaturedJobs from "../components/LandingPage/FeaturedJobs";
import LatestJob from "../components/LandingPage/LatestJob";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="md:p-6 bg-[#F8F8FD]">
      <HeroSection />
      <PartnerSection />
      <Categories />
      <CTASection />
      <FeaturedJobs />
      <LatestJob />
    </div>
  );
};

export default LandingPage;
