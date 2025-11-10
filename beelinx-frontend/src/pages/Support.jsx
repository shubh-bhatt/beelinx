import SupportHero from "../components/support/SupportHero";
import SupportCategory from "../components/support/SupportCategory";
import SupportKnowledge from "../components/support/SupportKnowledge";
import SupportContact from "../components/support/SupportContact";
import SystemSupport from "../components/support/SystemSupport";
import Community from "../components/support/Community";
import SupportEnterprises from "../components/support/SupportEnterprises";
import FinalCTA from "../components/support/FinalCTA";
const Support = () => {
  return (
    <div>
      <SupportHero />
      <SupportCategory />
      <SupportKnowledge />
      <SupportContact />
      <SystemSupport />
      <Community />
      <SupportEnterprises />
      <FinalCTA />
    </div>
  );
};

export default Support;
