import React from 'react'
import { Check, X, Zap, Building2, Landmark } from 'lucide-react';

const PricingTable = () => {
    const comparisonFeatures = [
    { name: 'API Access', msme: true, enterprise: true, government: true },
    { name: 'Sandbox Environment', msme: true, enterprise: true, government: true },
    { name: 'SLA Guarantee', msme: false, enterprise: '99.9%', government: '99.95%' },
    { name: 'Compliance Support', msme: 'Basic', enterprise: 'Advanced', government: 'Full' },
    { name: 'Reconciliation Dashboard', msme: true, enterprise: true, government: true },
    { name: 'Dedicated Support', msme: false, enterprise: true, government: true },
    { name: 'Custom Integrations', msme: false, enterprise: true, government: true },
    { name: 'Training & Onboarding', msme: 'Self-service', enterprise: 'Available', government: 'Included' }
  ];
  return (
    <div className='px-10 max-w-7xl m-auto'>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-linear-to-br from-blue-400 to-blue-500 text-white px-8 py-6">
            <h2 className="text-2xl font-bold text-white text-center">Pricing Comparison At-a-Glance</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b-2 border-slate-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Features</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5 text-emerald-500" />
                      MSME
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    <div className="flex items-center justify-center gap-2">
                      <Building2 className="w-5 h-5 text-cyan-500" />
                      Enterprise
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    <div className="flex items-center justify-center gap-2">
                      <Landmark className="w-5 h-5 text-slate-700" />
                      Government
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={idx} className={`border-b border-slate-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-cyan-50 transition-colors`}>
                    <td className="px-6 py-4 text-slate-700 font-medium">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.msme === 'boolean' ? (
                        feature.msme ? (
                          <div className="inline-flex bg-emerald-100 rounded-full p-1.5">
                            <Check className="w-5 h-5 text-emerald-600" />
                          </div>
                        ) : (
                          <div className="inline-flex bg-slate-100 rounded-full p-1.5">
                            <X className="w-5 h-5 text-slate-400" />
                          </div>
                        )
                      ) : (
                        <span className="text-slate-700 font-medium">{feature.msme}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? (
                          <div className="inline-flex bg-emerald-100 rounded-full p-1.5">
                            <Check className="w-5 h-5 text-emerald-600" />
                          </div>
                        ) : (
                          <div className="inline-flex bg-slate-100 rounded-full p-1.5">
                            <X className="w-5 h-5 text-slate-400" />
                          </div>
                        )
                      ) : (
                        <span className="text-slate-700 font-medium">{feature.enterprise}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.government === 'boolean' ? (
                        feature.government ? (
                          <div className="inline-flex bg-emerald-100 rounded-full p-1.5">
                            <Check className="w-5 h-5 text-emerald-600" />
                          </div>
                        ) : (
                          <div className="inline-flex bg-slate-100 rounded-full p-1.5">
                            <X className="w-5 h-5 text-slate-400" />
                          </div>
                        )
                      ) : (
                        <span className="text-slate-700 font-medium">{feature.government}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-linear-to-r from-slate-50 to-cyan-50 px-8 py-6 text-center">
            <p className="text-slate-600 mb-4">Need a custom solution? We're here to help.</p>
            <button className="bg-slate-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 transition-all hover:-translate-y-2 duration-300 hover:scale-105 shadow-lg ">
              Contact Sales Team
            </button>
          </div>
        </div>

        {/* Volume Discount Note */}
        <div className="mt-4 text-center">
          <p className="text-slate-600 text-sm">
            * Volume discounts available for all plans. Contact us for custom pricing based on your specific requirements.
          </p>
        </div>
    </div>
  )
}

export default PricingTable