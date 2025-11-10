import React from "react";
import {
  Check,
  ArrowRight,
  Code,
  Shield,
  Zap,
  Users,
  Building2,
  Landmark,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Usecases() {



  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-white">
      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Powering Payments Across Industries
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            From small businesses to government schemes, our virtual accounts
            streamline payment collection and reconciliation
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MSME Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MSMEs</h3>
              <p className="text-gray-600 mb-6">
                Online marketplaces and small businesses accepting customer
                deposits with automatic reconciliation
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Instant payment tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Zero manual reconciliation
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Affordable pricing plans
                  </span>
                </li>
              </ul>
            </div>

            {/* Enterprise Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise
              </h3>
              <p className="text-gray-600 mb-6">
                NBFCs and large corporations reconciling EMIs and bulk payments
                via dedicated virtual accounts
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Handle millions of transactions
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Custom integration support
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Dedicated account manager
                  </span>
                </li>
              </ul>
            </div>

            {/* Government Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Landmark className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Government
              </h3>
              <p className="text-gray-600 mb-6">
                State departments managing scheme disbursements and citizen
                payments with complete transparency
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Audit-ready reporting</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Data localization compliance
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Multi-level access controls
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
