import React from "react";
import BrandingHeroSec from "../../components/BrandingComponents/BrandingHeroSec";
import BrandSolutions from "../../components/BrandingComponents/BrandSolutions";
import CaseStudy from "../../components/BrandingComponents/CaseStudy";
import LetsTalk from "../../components/BrandingComponents/LetsTalk";
import PowerFulBrand from "../../components/BrandingComponents/PowerFulBrand";
import "./Branding.css";
const Branding = () => {
  return (
    <div className="branding">
      <BrandingHeroSec />
      <PowerFulBrand boldText="Powerful Brand?" />
      <CaseStudy />
      <BrandSolutions
        firstText="Brand Audits and Analysis"
        secondText="Brand Creation & Strategy Development"
        thirdText="Brand Revamp"
        fourthText="Logo Design & Brand Guidelines Development"
      />
      <LetsTalk
        firstText="Let's redefine your brand together"
        secondText="We cover it all"
        desc="Ready to transform your brand narrative? Let’s do it."
      />
    </div>
  );
};

export default Branding;
