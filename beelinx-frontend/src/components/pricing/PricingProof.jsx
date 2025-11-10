import React from 'react'

const PricingProof = () => {
  return (
    <div className="bg-linear-to-r bg-[f4f4f4] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Trusted by Leading Organizations
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            "We scaled to 1M transactions a month with predictable pricing."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70 ">
            {['MSME Partner', 'Enterprise Corp', 'Government Agency', 'Tech Startup'].map((client, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center font-bold text-sky-600 hover:-translate-y-2 duration-300 hover:scale-105 shadow-lg  ">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default PricingProof