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

const HowItWorks = () => {
  return (
    <div>   {/* How It Works Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Simple, automated, and seamless payment processing
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

            {/* Steps */}
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Generate Virtual Account",
                  description: "Create a unique virtual account for each customer or transaction through our API or dashboard"
                },
                {
                  step: 2,
                  title: "Customer Makes Payment",
                  description: "Customer transfers funds to the virtual account via NEFT, RTGS, IMPS, or UPI"
                },
                {
                  step: 3,
                  title: "Instant Notification",
                  description: "Receive real-time webhook notifications the moment payment is credited"
                },
                {
                  step: 4,
                  title: "Auto-Reconcile",
                  description: "Payments are automatically matched to orders, invoices, or customers with zero manual effort"
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16 md:order-2'}`}>
                    <div className="bg-blue-50 rounded-xl p-6 inline-block">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 md:flex">
                    {item.step}
                  </div>
                  
                  <div className="flex-1 md:hidden">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              Watch Demo Video
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section></div>
  )
}

export default HowItWorks