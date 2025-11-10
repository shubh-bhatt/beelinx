import KeyFeatures from "../components/ProductDetails/KeyFeatures";
import Benefits from "../components/ProductDetails/Benefits";
import Usecases from "../components/ProductDetails/Usecases";
import HowItWorks from "../components/ProductDetails/HowItWorks";
import DeveloperSection from "../components/ProductDetails/DeveloperSection";
import SecurityComplience from "../components/ProductDetails/SecurityComplience";
import PricingSection from "../components/ProductDetails/PricingSection";
import CaseStudy from "../components/ProductDetails/CaseStudy";
import DetailsHeroSection from "../components/ProductDetails/DetailsHerosection";

const ProductDetails = () => {
  return (
    <div>
      <DetailsHeroSection />
      <KeyFeatures />
      <Benefits />
      <Usecases />
      <HowItWorks />
      <DeveloperSection />
      <SecurityComplience />
      <PricingSection />
      <CaseStudy />
    </div>
  );
};

export default ProductDetails;
