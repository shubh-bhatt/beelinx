import React from 'react'
import PricingHero from '../components/pricing/PricingHero'
import PricingComponent from '../components/pricing/Pricingplans'
import PricingTable from '../components/pricing/PricingTable'
import PricingAddService from '../components/pricing/PricingAddService'
import PricingFAQ from '../components/pricing/PricingFAQ'
import PricingProof from '../components/pricing/PricingProof'
import PricingFinalCTA from '../components/pricing/PricingFinalCTA'

const Pricing = () => {
  return (
    <div>
      <PricingHero />
      <PricingComponent/>
      <PricingTable/>
      <PricingAddService/>
      <PricingFAQ/>
      <PricingProof/>
      <PricingFinalCTA/>
    </div>
  )
}

export default Pricing