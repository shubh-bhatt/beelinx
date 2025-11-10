import React from 'react'
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
const CaseStudies = () => {
  return (
    <div>
      {" "}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how organizations are transforming their payment operations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                segment: "MSME",
                company: "E-commerce Marketplace",
                problem:
                  "Manual reconciliation of 5,000+ daily seller payments",
                solution: "Automated Virtual Accounts for each seller",
                result:
                  "95% reduction in reconciliation time, from 6 hours to 20 minutes daily",
                icon: Users,
              },
              {
                segment: "Enterprise",
                company: "Leading NBFC",
                problem: "Managing 100,000+ monthly EMI collections",
                solution: "UPI Intent-based automated collections",
                result:
                  "40% improvement in on-time collections, 60% reduction in collection costs",
                icon: Building2,
              },
              {
                segment: "Government",
                company: "State Government Department",
                problem: "Disbursing subsidies to 500,000+ beneficiaries",
                solution: "Secure bulk payout with compliance tracking",
                result:
                  "100% audit compliance, 80% faster disbursement processing",
                icon: Landmark,
              },
            ].map((study, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <study.icon className="w-8 h-8 text-blue-600" />
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    {study.segment}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {study.company}
                </h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">
                      Challenge
                    </div>
                    <div className="text-gray-700">{study.problem}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">
                      Solution
                    </div>
                    <div className="text-gray-700">{study.solution}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-1">
                      Result
                    </div>
                    <div className="text-green-700 font-semibold">
                      {study.result}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCTA("Read Full Case Study")}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                >
                  Read Full Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies