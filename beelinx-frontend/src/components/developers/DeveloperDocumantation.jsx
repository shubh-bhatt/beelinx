import React, { useState } from 'react'
import { Code, Zap, Shield, Book, Users, FileText, Download, ExternalLink, Check, ChevronRight, Terminal, Blocks, Lock, CheckCircle } from 'lucide-react';

const DeveloperDocumantation = () => {
   const [activeTab, setActiveTab] = useState('collect');
    const apiCategories = {
    collect: {
      title: 'Collect APIs',
      items: [
        { name: 'Virtual Account', desc: 'Generate unique virtual accounts for seamless collections' },
        { name: 'UPI QR', desc: 'Dynamic QR code generation for UPI payments' },
        { name: 'Payment Intent', desc: 'Create payment intents with multiple options' }
      ]
    },
    pay: {
      title: 'Pay APIs',
      items: [
        { name: 'IMPS', desc: 'Instant money transfer 24x7' },
        { name: 'NEFT', desc: 'Batch payments via NEFT' },
        { name: 'RTGS', desc: 'High-value real-time settlements' },
        { name: 'Autopay', desc: 'Recurring payment automation' }
      ]
    },
    verify: {
      title: 'Verify APIs',
      items: [
        { name: 'PAN Verification', desc: 'Instant PAN validation' },
        { name: 'Aadhaar Verification', desc: 'eKYC and Aadhaar validation' },
        { name: 'Account Verification', desc: 'Bank account verification via penny drop' }
      ]
    },
    reconcile: {
      title: 'Reconcile APIs',
      items: [
        { name: 'Settlement Reports', desc: 'Automated settlement reporting' },
        { name: 'Auto-Recon', desc: 'Intelligent reconciliation engine' }
      ]
    }
  };
  return (
    <div className=" bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
              {/* API Documentation Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">API Documentation</h2>
            <p className="text-slate-400 text-lg">Comprehensive guides for all our APIs</p>
          </div>
          
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {Object.keys(apiCategories).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {apiCategories[key].title}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiCategories[activeTab].items.map((api, i) => (
              <div key={i} className="group bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <Code className="w-10 h-10 text-blue-400" />
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{api.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{api.desc}</p>
                <div className="flex items-center text-blue-400 text-sm font-semibold">
                  View Docs <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DeveloperDocumantation