import HeroSolution from "../components/solutions/SolutionHero";
import SolutionSegments from "../components/solutions/SolutionSegments";
import SolutionUseCase from "../components/solutions/SolutionUseCase";
import WhyChooseSolution from "../components/solutions/WhyChooseSolution";
import CaseStudies from "../components/solutions/CaseStudiesSolution";
import FinalCTA from "../components/solutions/FinalCTAsolution";

const Solution = () => {
    return (
        <div className="flex flex-col w-full "> 
        <HeroSolution />
        <SolutionSegments />
        <SolutionUseCase />
        <WhyChooseSolution />
        <CaseStudies />
        <FinalCTA />
       
        </div>
    );
};

export default Solution;