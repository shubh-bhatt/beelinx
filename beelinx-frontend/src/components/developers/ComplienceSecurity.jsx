import React from 'react'
import { Code, Zap, Shield, Book, Users, FileText, Download, ExternalLink, Check, ChevronRight, Terminal, Blocks, Lock, CheckCircle } from 'lucide-react';

const ComplienceSecurity = () => {
  return (
    <div className=" bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
     
    {/* Compliance & Security */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Compliance & Security</h2>
            <p className="text-slate-400 text-lg">Built with enterprise-grade security standards</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'RBI Compliant', desc: 'Fully compliant with RBI guidelines and regulations' },
              { title: 'PCI DSS / ISO Certified', desc: 'Industry-standard security certifications' },
              { title: 'Secure API Practices', desc: 'OAuth 2.0, encryption, and best security practices' }
            ].map((item, i) => (
              <div key={i} className="bg-linear-to-br from-green-900/20 to-slate-900 border border-green-500/30 rounded-xl p-6">
                <CheckCircle className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComplienceSecurity