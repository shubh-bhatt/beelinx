import React from 'react'
import { useState } from 'react';
import {
  ArrowRight,
  Check,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Building2,
  Landmark,
  ChevronRight,
  CheckCircle2,
  Lock,
  FileCheck,
  BarChart3,
  AlertCircle,
} from "lucide-react";

const TargetSegmentSolution = () => {
    const [selectedSegment, setSelectedSegment] = useState("msme");
  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who It's For
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for every organization size
            </p>
          </div>
          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: "msme", label: "MSMEs", icon: Users },
              { id: "enterprise", label: "Enterprises", icon: Building2 },
              { id: "government", label: "Government", icon: Landmark },
            ].map((seg) => (
              <button
                key={seg.id}
                onClick={() => setSelectedSegment(seg.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  selectedSegment === seg.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                <seg.icon className="w-5 h-5" />
                {seg.label}
              </button>
            ))}
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            {selectedSegment === "msme" && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-12 h-12 text-blue-600" />
                  <h3 className="text-3xl font-bold text-gray-900">
                    For MSMEs
                  </h3>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Affordable plug-and-play collection solutions designed for
                  small and medium businesses
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Quick 2-hour integration with existing systems",
                    "Pay-as-you-go pricing with no upfront costs",
                    "Handle up to 10,000 transactions per day",
                    "Dedicated support team for onboarding",
                    "Mobile-first dashboard for on-the-go management",
                    "Free migration assistance from existing systems",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedSegment === "enterprise" && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Building2 className="w-12 h-12 text-blue-600" />
                  <h3 className="text-3xl font-bold text-gray-900">
                    For Enterprises
                  </h3>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Enterprise-grade solutions for bulk payouts, large-scale
                  reconciliation, and complex workflows
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Process millions of transactions daily with 99.99% uptime",
                    "Advanced bulk payout capabilities with scheduling",
                    "Custom API endpoints and webhook configurations",
                    "Dedicated account manager and 24/7 priority support",
                    "White-label options and custom branding",
                    "Advanced analytics and business intelligence tools",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedSegment === "government" && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Landmark className="w-12 h-12 text-blue-600" />
                  <h3 className="text-3xl font-bold text-gray-900">
                    For Government
                  </h3>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Secure disbursement and subsidy management solutions for
                  government entities
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Enhanced security with data residency in India",
                    "Direct Benefit Transfer (DBT) integration ready",
                    "Complete audit trail for every transaction",
                    "Multi-level approval workflows and access controls",
                    "Compliance with government IT security standards",
                    "Dedicated on-premise deployment options available",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TargetSegmentSolution