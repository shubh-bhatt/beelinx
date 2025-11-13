import React from "react";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Generate Virtual Account",
      description:
        "Create a unique virtual account for each customer or transaction through our API or dashboard",
    },
    {
      step: 2,
      title: "Customer Makes Payment",
      description:
        "Customer transfers funds to the virtual account via NEFT, RTGS, IMPS, or UPI",
    },
    {
      step: 3,
      title: "Instant Notification",
      description:
        "Receive real-time webhook notifications the moment payment is credited",
    },
    {
      step: 4,
      title: "Auto-Reconcile",
      description:
        "Payments are automatically matched to orders, invoices, or customers with zero manual effort",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Simple, automated, and seamless payment processing
        </p>

        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {/* Steps */}
          <div className="flex flex-col space-y-20">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {/* Step content wrapper */}
                <div
                  className={`w-full md:w-5/12 flex flex-col items-center ${
                    index % 2 === 0
                      ? "md:items-end md:pr-12"
                      : "md:items-start md:pl-12"
                  }`}
                >
                  {/* Step number on top */}
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 z-10">
                    {item.step}
                  </div>

                  {/* Card content */}
                  <div className="bg-blue-50 rounded-xl p-6 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
            Watch Demo Video
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
