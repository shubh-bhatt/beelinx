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

const CaseStudy = () => {
  return (
    <div>  {/* Case Study / Testimonial Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses transform their payment operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  AS
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Amit Sharma</h4>
                  <p className="text-gray-600 text-sm">CFO, FinTrust NBFC</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-4">
                "Reduced reconciliation time by 80% using Virtual Accounts. What used to take our team 3 days now happens automatically in real-time."
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Zap className="w-5 h-5 mr-2" />
                <span>80% faster reconciliation</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  PK
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Priya Kumar</h4>
                  <p className="text-gray-600 text-sm">CTO, ShopEase Marketplace</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-4">
                "Integration was seamless and took just 2 hours. Customer satisfaction improved dramatically with instant payment confirmations."
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Check className="w-5 h-5 mr-2" />
                <span>2-hour integration</span>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Payments?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust us with their payment infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Read More Case Studies
              </button>
            </div>
          </div>
        </div>
      </section></div>
  )
}

export default CaseStudy