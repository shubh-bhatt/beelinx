import HeroSection from "../components/services/ServiceHero";
import ServiceCategories from "../components/services/ServiceCategories";
import DeepDiveServices from "../components/services/ServiceBlock";
import WhyChooseUs from "../components/services/WhyChooseServices";
import CaseStudies from "../components/services/CaseStudies";
import FinalCTA from "../components/services/FinalCTA";


const Services = () => {
  return (
    <div className="flex flex-col w-full ">
      <HeroSection />
      <ServiceCategories />
      <DeepDiveServices />
      <WhyChooseUs />
      <CaseStudies />
      <FinalCTA />
      
    </div>
  );
};

export default Services;
