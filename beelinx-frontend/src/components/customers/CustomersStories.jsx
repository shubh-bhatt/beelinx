import React from 'react'
import { Building2, Users, Shield, TrendingUp, ArrowRight, Check, Star } from 'lucide-react';

const CustomersStories = () => {
    const caseStudies = [
    {
      logo: 'State Government',
      result: '₹500 Cr+ Subsidy Disbursements',
      challenge: 'Manual processing causing delays in farmer subsidy payments',
      solution: 'Automated bulk disbursement API with real-time reconciliation',
      outcome: '95% faster processing, zero payment errors, 100% transparency',
      color: 'from-blue-500 to-blue-600'
    },
    {
      logo: 'Leading NBFC',
      result: '10L+ Loans Processed Monthly',
      challenge: 'High rejection rates due to KYC verification delays',
      solution: 'Integrated Aadhaar KYC and instant bank verification',
      outcome: '80% reduction in TAT, 40% improvement in conversion',
      color: 'from-purple-500 to-purple-600'
    },
    {
      logo: 'Fintech Startup',
      result: '50K+ Daily Transactions',
      challenge: 'Scaling payment infrastructure with limited resources',
      solution: 'Plug-and-play payment gateway with auto-reconciliation',
      outcome: '99.9% uptime, 70% cost savings, 5x growth in 6 months',
      color: 'from-green-500 to-green-600'
    },
    {
      logo: 'Enterprise Corp',
      result: '₹200 Cr+ Monthly Volume',
      challenge: 'Complex multi-bank reconciliation and compliance reporting',
      solution: 'Unified API platform with automated compliance workflows',
      outcome: 'Single integration, 90% faster reconciliation, full audit trail',
      color: 'from-orange-500 to-orange-600'
    }
  ];
  return (
    <div>
      <section className="py-20 px-6 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                <div className={`bg-linear-to-r ${study.color} p-6 text-white`}>
                  <div className="text-sm font-semibold mb-2 opacity-90">
                    {study.logo}
                  </div>
                  <h3 className="text-2xl font-bold">{study.result}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Outcome
                    </h4>
                    <p className="text-gray-600">{study.outcome}</p>
                  </div>
                  <button className="flex items-center gap-2 text-[#4CB4FB] cursor-pointer font-semibold hover:gap-3 transition-all">
                    Read Full Case Study
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomersStories