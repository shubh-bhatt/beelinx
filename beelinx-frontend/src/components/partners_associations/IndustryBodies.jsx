import React from 'react'

const IndustryBodies = () => {
    const bodies = ['NASSCOM', 'DLAI', 'FACE', 'FICCI', 'CII', 'IAMAI'];

  return (
<section className="py-20 px-6 bg-emerald-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Bodies & Associations</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Active members of India's leading fintech and technology councils
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {bodies.map((body, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="font-bold text-gray-800">{body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustryBodies