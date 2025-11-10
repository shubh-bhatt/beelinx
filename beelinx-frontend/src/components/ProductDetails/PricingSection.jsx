import React from 'react'
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


const PricingSection = () => {
  return (
    <div>
    {/* Pricing Section */}
      <section className="py-20 px-6 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose a plan that scales with your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MSME Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">MSME Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₹999</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Up to 500 transactions/month</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">0.5% per transaction</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Basic API access</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-blue-600 rounded-2xl p-8 shadow-xl text-white transform scale-105">
              <div className="bg-blue-500 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-blue-100 mb-6">For growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-2 mt-0.5 shrink-0" />
                  <span>Unlimited transactions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-2 mt-0.5 shrink-0" />
                  <span>Volume-based pricing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-2 mt-0.5 shrink-0" />
                  <span>Full API & webhook access</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-2 mt-0.5 shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-2 mt-0.5 shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Contact Sales
              </button>
            </div>

            {/* Government Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Government</h3>
              <p className="text-gray-600 mb-6">Tailored for public sector</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Unlimited scale</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">On-premise deployment option</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Custom compliance needs</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">Training & onboarding</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Request Quote
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
              View Detailed Pricing
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingSection