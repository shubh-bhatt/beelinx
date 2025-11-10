import React from "react";
import FinalCTA from "../common/FinalCTA";

const HomeFinalCTA = () => {
  return (
    <div className="bg-[f5f5f5]">
      <FinalCTA
        heading="Ready to Get Started?"
        subheading="Let's discuss how we can help transform your business"
        primaryBtnText="Request Demo"
        primaryBtnLink="/"
        secondaryBtnText="Schedule a Call"
        secondaryBtnLink="/"
      />
    </div>
  );
};

export default HomeFinalCTA;
