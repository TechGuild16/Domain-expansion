import React from "react";
import AboutUHeroSec from "../../components/AboutUsComponent/AboutUsHeroSec";
import Achievements from "../../components/AboutUsComponent/Achivements";
import "./About.css";

const Branding = () => {
  return (
    <div className="aboutus">
      <AboutUHeroSec />
      <Achievements />
    </div>
  );
};

export default Branding;
