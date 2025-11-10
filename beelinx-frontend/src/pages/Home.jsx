import Hero from "../components/home/Hero";
import CoreOfferings from "../components/home/CoreOfferings";
import CustomerSegments from "../components/home/CustomerSegments";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ServicesSnapshot from "../components/home/ServicesSnapshot";
import SocialProof from "../components/home/SocialProof";
import ResourcesInsights from "../components/home/Resources";
import FinalCTA from "../components/home/FinalCTA";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Hero />
      <CoreOfferings />
      <CustomerSegments />
      <WhyChooseUs />
      <ServicesSnapshot />
      <SocialProof />
      <ResourcesInsights />
      <FinalCTA />
    </div>
  );
};

export default Home;
