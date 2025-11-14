import { useState } from "react";
import { CheckCircle, IndianRupee } from "lucide-react";

const Pricing = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const pricingOptions = [
    {
      name: "Hourly Consulting",
      price: "₹5,000",
      unit: "per hour",
      features: [
        "Expert consultation",
        "Flexible scheduling",
        "No minimum commitment",
        "Email support",
      ],
      gradient: "from-slate-600 to-slate-700",
    },
    {
      name: "Subscription Support",
      price: "₹50,000",
      unit: "per month",
      features: [
        "Dedicated support",
        "Monthly reviews",
        "Priority response",
        "Phone & email",
      ],
      gradient: "from-blue-600 to-indigo-600",
      popular: true,
    },
    {
      name: "Enterprise Contract",
      price: "Custom",
      unit: "contact us",
      features: [
        "Full white-glove service",
        "Custom SLAs",
        "24/7 dedicated team",
        "On-site support",
      ],
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  return (
    // 🌿 Background gradient: from white (top) to green (bottom)
    <section className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50 ">
      <div className="max-w-7xl mx-auto">
        {/* === Section Header === */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Pricing & Engagement Model
          </h2>
          <p className="text-xl text-slate-600">
            Flexible options to match your needs and budget
          </p>
        </div>

        {/* === Pricing Cards === */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingOptions.map((plan, index) => {
            const isSelected = selectedCard === index;

            return (
              <div
                key={index}
                onClick={() => setSelectedCard(index)}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  isSelected ? "border-blue-600" : "border-slate-200"
                } hover:border-blue-600 transform hover:scale-105 cursor-pointer`}
              >
                {/* === Plan Title === */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>

                {/* === Price === */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-slate-600 ml-2">{plan.unit}</span>
                </div>

                {/* === Features === */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* === CTA Button === */}
                <button
                  className={`w-full bg-gradient-to-r ${plan.gradient} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        {/* === Custom Quote Button === */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105 inline-flex items-center gap-2 shadow-lg cursor-pointer">
            <IndianRupee className="w-5 h-5" />
            Get a Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
