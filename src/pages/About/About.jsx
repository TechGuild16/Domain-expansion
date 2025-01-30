import React from "react";
import AboutCard from "../../components/AboutUsComponent/AboutCard";
import AboutUHeroSec from "../../components/AboutUsComponent/AboutUsHeroSec";
import Achievements from "../../components/AboutUsComponent/Achivements";
import "./About.css";

const Branding = () => {
  return (
    <div className="aboutus">
      <AboutUHeroSec />
      <AboutCard />
      <Achievements />
    </div>
  );
};

export default Branding;