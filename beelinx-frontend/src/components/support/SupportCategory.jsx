import React from 'react'
import {  Code, Building2, Shield,  ExternalLink, ArrowRight } from 'lucide-react';

const SupportCategory = () => {
    const supportCategories = {
      developers: {
        icon: Code,
        title: "Developers",
        color: "from-blue-500 to-cyan-500",
        items: [
          "API Documentation",
          "SDKs & Tools",
          "Sandbox Troubleshooting",
          "Integration Guides",
        ],
      },
      msme: {
        icon: Building2,
        title: "MSMEs & Enterprises",
        color: "from-blue-500 to-cyan-500",
        items: [
          "Onboarding Help",
          "Billing & Payments",
          "Dashboard Usage",
          "Account Management",
        ],
      },
      government: {
        icon: Shield,
        title: "Government & Institutions",
        color: "from-blue-500 to-cyan-500",
        items: [
          "Bulk Payout Support",
          "Compliance Queries",
          "Secure Integrations",
          "Priority Assistance",
        ],
      },
    };
  return (
    <div>
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(supportCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <div
                key={key}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setActiveTab(key)}
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="text-[#4CB4FB] font-semibold hover:text-[#1893e4] flex items-center group-hover:translate-x-1 transition-transform">
                    Learn More <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SupportCategory