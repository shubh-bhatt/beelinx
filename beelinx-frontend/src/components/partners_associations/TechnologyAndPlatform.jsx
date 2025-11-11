import React from 'react'
import { Building2, Shield, Cloud, Users, ArrowRight, CheckCircle2, Award } from 'lucide-react';


const TechnologyAndPlatform = () => {
  const techPartners = [
    { icon: <Cloud className="w-8 h-8" />, name: 'AWS', desc: 'Cloud infrastructure & scaling', color: 'bg-orange-100 text-orange-600' },
    { icon: <Cloud className="w-8 h-8" />, name: 'Microsoft Azure', desc: 'Enterprise cloud solutions', color: 'bg-sky-100 text-sky-600' },
    { icon: <Cloud className="w-8 h-8" />, name: 'Google Cloud', desc: 'Data analytics & AI', color: 'bg-blue-100 text-blue-600' },
    { icon: <Building2 className="w-8 h-8" />, name: 'Zoho', desc: 'CRM & ERP integrations', color: 'bg-emerald-100 text-emerald-600' },
    { icon: <Building2 className="w-8 h-8" />, name: 'Tally', desc: 'Accounting software partner', color: 'bg-purple-100 text-purple-600' },
    { icon: <Building2 className="w-8 h-8" />, name: 'SAP', desc: 'Enterprise resource planning', color: 'bg-indigo-100 text-indigo-600' }
  ];
  return (
   <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology & Platform Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powered by world-class technology infrastructure
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {techPartners.map((partner, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className={`inline-flex p-3 rounded-lg ${partner.color} mb-4`}>
                {partner.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm">{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Industry Bodies Section
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

export default TechnologyAndPlatform