import React from "react";
import AboutCard from "../../components/AboutUsComponent/AboutCard";
import AboutUHeroSec from "../../components/AboutUsComponent/AboutUsHeroSec";
import Achievements from "../../components/AboutUsComponent/Achivements";
import OurTeam from "../../components/AboutUsComponent/OurTeam";
import "./About.css";

const Branding = () => {
  return (
    <div className="aboutus">
      <AboutUHeroSec />
      <AboutCard />
      <Achievements />
      <OurTeam />
    </div>
  );
};

export default Branding;
