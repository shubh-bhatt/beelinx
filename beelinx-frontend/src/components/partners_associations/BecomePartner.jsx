import React from 'react'
import { Building2, Shield, Cloud, Users, ArrowRight, CheckCircle2, Award } from 'lucide-react';

const BecomePartner = () => {
    const partnerTypes = [
    { icon: <Building2 />, title: 'Banking & Financial Institutions', desc: 'Integrate payment infrastructure' },
    { icon: <Cloud />, title: 'Technology Providers', desc: 'Build ecosystem integrations' },
    { icon: <Users />, title: 'Industry Associations', desc: 'Collaborate on standards' },
    { icon: <ArrowRight />, title: 'Channel/Reseller Partners', desc: 'Grow revenue together' }
  ];

  const benefits = [
    'Co-branding opportunities',
    'Revenue share programs',
    'Ecosystem exposure',
    'Technical support',
    'Joint marketing initiatives',
    'Priority integration support'
  ];
  return (
<section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Grow with Us — Join Our Partner Network</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Become part of India's fastest-growing fintech ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partnerTypes.map((type, idx) => (
            <div key={idx} className="bg-sky-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="inline-flex p-4 bg-sky-100 rounded-full text-sky-600 mb-4">
                {type.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
              <p className="text-gray-600 text-sm">{type.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Partner Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-emerald-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center gap-2">
              Apply to Partner Program
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BecomePartner