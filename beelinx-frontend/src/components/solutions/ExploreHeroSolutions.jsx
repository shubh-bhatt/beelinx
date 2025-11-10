import React from 'react'
import HeroExploreSolution from './ExploreSolution/HeroExploreSolution'
import SolutionSectionExplore from './ExploreSolution/SolutionSectionExplore'
import SolutionOverview from './ExploreSolution/SolutionOverview'
import SolutionWorkFlow from './ExploreSolution/SolutionWorkFlow'
import TargetSegmentSolution from './ExploreSolution/TargetSegmentSolution'
import CaseStudies from './ExploreSolution/CaseStudies'
import PricingSolution from './ExploreSolution/PricingSolution'
import FinalCTA from './ExploreSolution/FinalCTA'

const ExploreHeroSolutions = () => {
  return (
    <div>
        <HeroExploreSolution />
        <SolutionSectionExplore />
        <SolutionOverview />
        <SolutionWorkFlow />
        <TargetSegmentSolution />
        <CaseStudies />
        <PricingSolution />
        <FinalCTA />
    </div>
  )
}

export default ExploreHeroSolutions