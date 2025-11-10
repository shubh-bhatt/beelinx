import React from 'react'
import CustomersHero from '../components/customers/CustomersHero'
import CustomersSegment from '../components/customers/CustomersSegment'
import CustomersStories from '../components/customers/CustomersStories'
import CustomerTestimonial from '../components/customers/CustomerTestimonial'
import CustomerNumber from '../components/customers/CustomerNumber'
import FinalCTA from '../components/customers/FinalCTA'
const Customers = () => {
  return (
    <div>
        <CustomersHero />
        <CustomersSegment />
        <CustomersStories />
        <CustomerTestimonial />
        <CustomerNumber />
        <FinalCTA />
    </div>
  )
}

export default Customers