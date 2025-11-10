import React from 'react'
import { Building2, Users, Shield, TrendingUp, ArrowRight, Check, Star } from 'lucide-react';

const CustomerNumber = () => {
    const metrics = [
    { value: '50M+', label: 'Transactions Monthly' },
    { value: '5000+', label: 'MSMEs Onboarded' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '28', label: 'States Covered' }
  ];
  return (
    <div>
      {" "}
      <section className="py-20 px-6 bg-linear-to-br bg-[#4CB4FB] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Impact at Scale</h2>
            <p className="text-xl text-blue-100">
              Powering India's financial infrastructure
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
                  <TrendingUp className="w-8 h-8 mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {metric.value}
                  </div>
                  <div className="text-blue-100">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerNumber