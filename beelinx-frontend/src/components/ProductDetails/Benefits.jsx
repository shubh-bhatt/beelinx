import { Building2, Briefcase, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <Building2 className="w-10 h-10 text-blue-400" />,
    title: "MSME Value",
    points: [
      "Cost savings",
      "Faster onboarding",
      "Plug & play APIs",
    ],
  },
  {
    icon: <Briefcase className="w-10 h-10 text-blue-400" />,
    title: "Enterprise Value",
    points: [
      "Bulk processing",
      "Reconciliation automation",
      "Compliance-ready solutions",
    ],
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
    title: "Government Value",
    points: [
      "Secure bulk payouts",
      "Subsidy distribution",
      "Enhanced transparency",
    ],
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Business Value
        </h2>
        <p className="text-gray-600 mb-12">
          Empowering organizations of all sizes with fast, secure, and scalable financial infrastructure.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {benefit.title}
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600">
                {benefit.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
