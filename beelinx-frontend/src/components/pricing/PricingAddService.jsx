import React from 'react'
import { Zap, Shield, Users } from 'lucide-react';

const PricingAddService = () => {
    
const addOns = [
    {
      title: 'Integration & Onboarding',
      price: '₹25,000',
      description: 'Complete setup and integration support',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'Custom Compliance Reports',
      price: '₹15,000/month',
      description: 'Tailored regulatory reporting',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Fraud Monitoring',
      price: '₹20,000/month',
      description: 'Real-time fraud detection and alerts',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Enhance Your Experience
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Optional add-ons to supercharge your payment infrastructure
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {addOns.map((addon, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-transparent hover:border-sky-300"
            >
              <div className="bg-linear-to-br from-sky-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-sky-600">
                {addon.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{addon.title}</h3>
              <p className="text-3xl font-bold text-sky-600 mb-4">{addon.price}</p>
              <p className="text-gray-600 mb-6">{addon.description}</p>
              <button className="w-full bg-linear-to-r bg-[#4CB4FB] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Request Add-On
              </button>
            </div>
          ))}
        </div>
      </div>
  )
}

export default PricingAddService