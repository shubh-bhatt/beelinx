import React from 'react'
import { Building2, Shield, Cloud, Users, ArrowRight, CheckCircle2, Award } from 'lucide-react';

const SuccessStories = () => {
  return (
   
  <section className="py-20 px-6 bg-linear-to-r from-emerald-600 to-sky-600 text-white">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Partner Success Stories</h2>
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-white/20 p-3 rounded-lg">
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">₹500 Cr in Subsidy Disbursements</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              "Through our collaboration with XYZ Bank, we enabled seamless subsidy disbursements 
              for a state government, reaching over 2 million beneficiaries with 99.8% success rate."
            </p>
            <p className="mt-4 text-white/80 italic">— Partner Success Team</p>
          </div>
        </div>
      </div>
    </div>
  </section>
   
  )
}

export default SuccessStories