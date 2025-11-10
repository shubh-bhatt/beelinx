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

const SolutionWorkFlow = () => {
  return (
    <div>
      {" "}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, automated flow from payment to reporting
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 -translate-y-1/2 hidden lg:block"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
              {[
                {
                  step: "1",
                  title: "Customer Payment",
                  desc: "Customer scans UPI QR or clicks payment link",
                  icon: Users,
                },
                {
                  step: "2",
                  title: "Funds Received",
                  desc: "Payment lands in designated Virtual Account",
                  icon: Landmark,
                },
                {
                  step: "3",
                  title: "Auto-Reconciliation",
                  desc: "System matches payment with invoice instantly",
                  icon: CheckCircle2,
                },
                {
                  step: "4",
                  title: "Dashboard Update",
                  desc: "Real-time reporting and analytics updated",
                  icon: BarChart3,
                },
                {
                  step: "5",
                  title: "Compliance Logs",
                  desc: "Audit-ready records generated automatically",
                  icon: FileCheck,
                },
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-blue-300 transition-colors">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                      {step.step}
                    </div>
                    <step.icon className="w-10 h-10 text-blue-600 mb-3 mx-auto" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-center">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionWorkFlow