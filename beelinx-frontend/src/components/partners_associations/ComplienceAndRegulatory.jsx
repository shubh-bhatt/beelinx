import React from 'react'
import { Building2, Shield, Cloud, Users, ArrowRight, CheckCircle2, Award } from 'lucide-react';

const ComplienceAndRegulatory = () => { 
;
    
  const certifications = [
    { icon: <Shield className="w-8 h-8" />, name: 'PCI DSS', color: 'emerald' },
    { icon: <Award className="w-8 h-8" />, name: 'ISO 27001', color: 'sky' },
    { icon: <CheckCircle2 className="w-8 h-8" />, name: 'RBI Guidelines', color: 'emerald' },
    { icon: <Shield className="w-8 h-8" />, name: 'NPCI Member', color: 'sky' }
  ];

  const integrations = [
    'UIDAI Aadhaar Verification API',
    'NSDL PAN Verification Integration',
    'RBI Compliance Framework',
    'Data Protection Standards'
  ];
  return (
    <section className="py-10 px-6 bg-linear-to-br from-sky-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compliance & Regulatory Associations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Maintaining the highest standards of security and compliance
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, idx) => (
            <div key={idx} className={`bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all`}>
              <div className={`inline-flex p-4 rounded-full bg-${cert.color}-100 text-${cert.color}-600 mb-4`}>
                {cert.icon}
              </div>
              <h3 className="font-bold text-gray-900">{cert.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Integrations</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {integrations.map((integration, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-gray-700">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComplienceAndRegulatory;