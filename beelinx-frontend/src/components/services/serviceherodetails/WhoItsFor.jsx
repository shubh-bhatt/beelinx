import { CheckCircle, Briefcase, Building2, Landmark } from "lucide-react";

const WhoItsFor = () => {
  const targetAudience = [
    {
      icon: Briefcase,
      title: "MSMEs",
      description: "Affordable guided setup with flexible pricing",
      features: ["Quick onboarding", "Self-service tools", "Email support"],
    },
    {
      icon: Building2,
      title: "Enterprises",
      description: "Dedicated account manager with SLAs",
      features: [
        "24/7 priority support",
        "Custom integrations",
        "Advanced analytics",
      ],
    },
    {
      icon: Landmark,
      title: "Governments",
      description: "Audit-compliant bulk processes",
      features: ["High security", "Compliance reports", "Volume discounts"],
    },
  ];

  return (
    <>
      {/* Who It's For */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Who It's For
            </h2>
            <p className="text-xl text-slate-600">
              Tailored solutions for every business size
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border border-slate-200"
              >
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {audience.title}
                </h3>
                <p className="text-slate-600 mb-4">{audience.description}</p>
                <ul className="space-y-2">
                  {audience.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoItsFor;
