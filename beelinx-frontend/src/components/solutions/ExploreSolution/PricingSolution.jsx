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

const PricingSolution = () => {
  return (
    <div>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "MSME Plan",
                price: "Pay-as-you-go",
                desc: "Perfect for small and medium businesses",
                features: [
                  "Up to 10,000 transactions/month",
                  "All core features included",
                  "Email support",
                  "Standard API access",
                  "Basic analytics dashboard",
                ],
                cta: "Start Free Trial",
              },
              {
                name: "Enterprise Plan",
                price: "Custom Quote",
                desc: "For large-scale operations",
                features: [
                  "Unlimited transactions",
                  "Advanced features & customization",
                  "Priority 24/7 support",
                  "Dedicated account manager",
                  "Advanced analytics & BI tools",
                  "Custom SLA agreements",
                ],
                cta: "Contact Sales",
                featured: true,
              },
              {
                name: "Government Plan",
                price: "Custom Contract",
                desc: "Tailored for government entities",
                features: [
                  "On-premise deployment option",
                  "Enhanced security features",
                  "Compliance documentation",
                  "Dedicated support team",
                  "Custom integration support",
                  "Training and onboarding",
                ],
                cta: "Request Proposal",
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 ${
                  plan.featured
                    ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                {plan.featured && (
                  <div className="text-center mb-4">
                    <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.featured ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div
                  className={`text-3xl font-bold mb-4 ${
                    plan.featured ? "text-white" : "text-blue-600"
                  }`}
                >
                  {plan.price}
                </div>
                <p
                  className={`mb-6 ${
                    plan.featured ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {plan.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.featured ? "text-white" : "text-green-600"
                        }`}
                      />
                      <span
                        className={
                          plan.featured ? "text-white" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleCTA(plan.cta)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.featured
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingSolution