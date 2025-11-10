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

const SolutionOverview = () => {
  return (
    <div>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Solution: Digital Collections Suite
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive platform that brings all payment collection tools
              together
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Virtual Accounts",
                    desc: "Unique account numbers for each customer or transaction",
                  },
                  {
                    title: "UPI QR & Intent",
                    desc: "Generate dynamic QR codes and payment links instantly",
                  },
                  {
                    title: "Automated Reconciliation",
                    desc: "Match payments with invoices in real-time",
                  },
                  {
                    title: "Compliance & Reporting",
                    desc: "Generate audit-ready reports and maintain compliance",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-lg">{item.title}</div>
                      <div className="text-blue-100">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How They Work Together
              </h3>
              <p className="text-gray-600 mb-6">
                Our suite integrates seamlessly to create a unified payment
                collection ecosystem. Virtual Accounts provide unique
                identifiers for each transaction, while UPI QR and Intent enable
                instant digital payments. The moment a payment is received, our
                automated reconciliation engine matches it with the
                corresponding invoice or order. Finally, all transactions are
                logged with complete compliance documentation, ready for audits
                and regulatory reporting.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Single Integration Point
                    </div>
                    <div className="text-gray-600">
                      One API integration gives you access to all features
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionOverview