import ExploreHero from "./serviceherodetails/ExploreHero";
import ExploreServiceCovers from "./serviceherodetails/ExploreServiceCovers";
import ChooseService from "./serviceherodetails/ChooseService";
import HowItWorks from "./serviceherodetails/HowItWorks";
import WhoItsFor from "./serviceherodetails/WhoItsFor";
import CaseStudy from "./serviceherodetails/CaseStudy";
import RelatedServices from "./serviceherodetails/RelatedServices";
import ComplianceAndTrust from "./serviceherodetails/ComplianceAndTrust";
import Pricing from "./serviceherodetails/Pricing";
import FinalCTA from "./serviceherodetails/FinalCTA";

const ServiceHeroDetails = () => {
  return (
    <div className="mt-20">
      <ExploreHero />
      <ExploreServiceCovers />
      <ChooseService />
      <HowItWorks />
      <WhoItsFor />
      <CaseStudy />
      <RelatedServices />
      <ComplianceAndTrust />
      <Pricing />
      <FinalCTA />
    </div>
  );
};

export default ServiceHeroDetails;
