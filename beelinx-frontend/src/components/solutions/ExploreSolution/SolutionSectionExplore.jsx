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

const SolutionSectionExplore = () => {
  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Problems We Solve
            </h2>
            <p className="text-xl text-gray-600">
              Critical pain points faced by businesses in payment collections
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: AlertCircle,
                title: "Delayed Settlements",
                desc: "Slow payment processing impacts cash flow and business operations",
              },
              {
                icon: FileCheck,
                title: "Manual Reconciliation",
                desc: "Time-consuming manual matching leads to errors and inefficiency",
              },
              {
                icon: TrendingUp,
                title: "Expensive Integration",
                desc: "High costs to integrate multiple payment systems and vendors",
              },
              {
                icon: Shield,
                title: "Fraud & Compliance",
                desc: "Security vulnerabilities and regulatory compliance challenges",
              },
            ].map((problem, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <problem.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionSectionExplore