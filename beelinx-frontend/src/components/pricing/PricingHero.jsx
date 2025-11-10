import React from 'react'
import herobg from "../../assets/herobg.jpg"; 

const PricingHero = () => {
  return (
    <section  className='min-h-screen bg-cover bg-center bg-no-repeat  text-white flex flex-col justify-center items-center text-center gap-6 px-4'  style={{ backgroundImage: `url(${herobg})` }}>
      
       <div>
        <h1 className='text-6xl font-bold '>Simple, Transparent Pricing <br /> for Every Business</h1>
        <p className='text-base text-gray-100 p-4 font-medium'>Choose the plan that fits your scale — from startups to large enterprises to government institutions.</p>
        <div className='flex gap-8 justify-center mt-6'>
          {/* get started */}
          <div>
            <button className='border-2 border-white   p-3 rounded-full hover:bg-white hover:text-gray-700 hover:-translate-y-2 duration-300 hover:scale-105 shadow-lg'> Get Started</button>
          </div>
          {/* talk to sales */}
          <div>
            <button  className=' bg-blue-400 p-3 rounded-full text-white hover:bg-white hover:text-gray-700 hover:-translate-y-2 duration-300 hover:scale-105 shadow-lg'>Talk To Sales</button>
          </div>
        </div>
       </div>

    </section>
  )
}

export default PricingHero