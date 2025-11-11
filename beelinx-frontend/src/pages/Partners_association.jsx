import React from "react";
import PartnerHero from "../components/partners_associations/PartnerHero";
import BankingAndPaymentsPartners from "../components/partners_associations/BankingAndPaymentsPartners";
import ComplienceAndRegulatory from "../components/partners_associations/ComplienceAndRegulatory";
import TechnologyAndPlatform from "../components/partners_associations/TechnologyAndPlatform";
import IndustryBodies from "../components/partners_associations/IndustryBodies";
import SuccessStories from "../components/partners_associations/SuccessStories";
import BecomePartner from "../components/partners_associations/BecomePartner";
import PartnerFinalCTA from "../components/partners_associations/PartnerFinalCTA";

const Partners_association = () => {
  return (
    <div>
      <PartnerHero />
      <BankingAndPaymentsPartners />
      <ComplienceAndRegulatory />
      <TechnologyAndPlatform />
      <IndustryBodies />
      <SuccessStories />  
      <BecomePartner />
      <PartnerFinalCTA />

    </div>
  );
};

export default Partners_association;
