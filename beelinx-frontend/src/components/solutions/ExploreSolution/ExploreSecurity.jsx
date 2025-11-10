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

const ExploreSecurity = () => {
  return (
    <div>
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Security & Compliance</h2>
            <p className="text-xl text-gray-300">
              Bank-grade security with regulatory compliance built-in
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "RBI & NPCI Aligned",
                desc: "Fully compliant with Indian banking regulations",
              },
              {
                icon: Lock,
                title: "PCI DSS & ISO 27001",
                desc: "International security certifications",
              },
              {
                icon: Landmark,
                title: "Data Residency",
                desc: "All data stored within India boundaries",
              },
              {
                icon: CheckCircle2,
                title: "99.9% Uptime SLA",
                desc: "Guaranteed availability with penalties",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-xl">
                <item.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Our Security Commitments
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "End-to-end encryption for all transactions",
                "Regular third-party security audits",
                "Real-time fraud detection and prevention",
                "Multi-factor authentication for all users",
                "Role-based access control (RBAC)",
                "Complete audit logs for all activities",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExploreSecurity