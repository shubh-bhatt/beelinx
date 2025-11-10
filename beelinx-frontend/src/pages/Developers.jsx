import DevelopersHero from "../components/developers/DevelopersHero";
import DeveloperDocumantation from "../components/developers/DeveloperDocumantation";
import SdkTools from "../components/developers/SdkTools";
import DeveloperResources from "../components/developers/DeveloperResources";
import CommunitySupport from "../components/developers/CommunitySupport";
import Complience from "../components/developers/ComplienceSecurity";
import FinalCTA from "../components/developers/FinalCTA";

const Developers = () => {
  return (
    <div>
      <DevelopersHero />
      <DeveloperDocumantation />
      <SdkTools />
      <DeveloperResources />
      <CommunitySupport />
      <Complience />
      <FinalCTA />
    </div>
  );
};

export default Developers;
