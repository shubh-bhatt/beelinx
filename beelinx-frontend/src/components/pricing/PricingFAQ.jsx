import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // ✅ import icons

const PricingFAQ = () => {
  // ✅ useState must be inside the component
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Do I need to pay for sandbox access?",
      a: "No, sandbox access is free for all plans. You can test and develop without any charges.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes! MSME plans can start immediately with pay-as-you-go. Enterprise and Government plans include a 14-day trial.",
    },
    {
      q: "How do you charge for API calls?",
      a: "MSME plans pay ₹2 per API call with volume discounts. Enterprise plans include unlimited calls in the monthly subscription.",
    },
    {
      q: "What payment methods do you support?",
      a: "We accept all major credit/debit cards, UPI, net banking, and for enterprise clients, invoice-based billing.",
    },
    {
      q: "Can government institutions pay via direct billing?",
      a: "Yes, we offer direct billing and support PO-based procurement for government institutions.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-lg text-gray-900">{faq.q}</span>
              {openFaq === idx ? (
                <ChevronUp className="w-6 h-6 text-sky-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>

            {openFaq === idx && (
              <div className="px-8 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingFAQ;
