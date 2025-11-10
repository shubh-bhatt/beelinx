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

const HeroExploreSolution = () => {
    
      const handleCTA = (action) => {
        alert(`${action} button clicked - This would integrate with Zoho CRM`);
      };
  return (
    <div>
    

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Digital Collections Suite – End-to-End Payment Collection Made
                Simple
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                An integrated suite of APIs and services designed for MSMEs,
                Enterprises, and Government organizations to streamline payment
                collections and reconciliation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleCTA("Request Demo")}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg font-semibold"
                >
                  Request Demo <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleCTA("Talk to an Expert")}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
                >
                  Talk to an Expert
                </button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                Integrated Payment Ecosystem
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      Virtual Accounts
                    </div>
                    <div className="text-sm text-gray-600">
                      Unique account mapping
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      UPI QR & Intent
                    </div>
                    <div className="text-sm text-gray-600">
                      Instant payment collection
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      Auto Reconciliation
                    </div>
                    <div className="text-sm text-gray-600">
                      Real-time matching
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      Compliance & Reporting
                    </div>
                    <div className="text-sm text-gray-600">
                      Audit-ready logs
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroExploreSolution