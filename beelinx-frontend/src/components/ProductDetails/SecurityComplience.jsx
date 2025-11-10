import React from 'react'
import { Check, ArrowRight, Code, Shield, Zap, Users, Building2, Landmark, ChevronDown, ChevronUp } from 'lucide-react';


const SecurityComplience = () => {
  return (
    <div>
          {/* Security & Compliance Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your payments are protected by industry-leading security standards and compliance certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "RBI Compliant",
                description: "Fully compliant with Reserve Bank of India payment regulations"
              },
              {
                title: "PCI DSS Certified",
                description: "Level 1 PCI DSS certification for payment card security"
              },
              {
                title: "ISO 27001",
                description: "International standard for information security management"
              },
              {
                title: "Data Localization",
                description: "All data stored within India with end-to-end encryption"
              }
            ].map((item, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-2">Bank-Level Encryption</h4>
                <p className="text-gray-400 text-sm">256-bit SSL/TLS encryption for all data transmission</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">24/7 Monitoring</h4>
                <p className="text-gray-400 text-sm">Real-time fraud detection and transaction monitoring</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Regular Audits</h4>
                <p className="text-gray-400 text-sm">Quarterly security audits by certified third parties</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecurityComplience