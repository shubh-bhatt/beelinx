import { Shield, FileCheck, Lock, BadgeCheck } from "lucide-react";

const ExploreServiceCovers = () => {
  const serviceFeatures = [
    {
      icon: FileCheck,
      title: "Regulatory Filings Support",
      description:
        "Complete assistance with all regulatory submissions and documentation",
    },
    {
      icon: Shield,
      title: "Audit-Ready Reporting",
      description:
        "Comprehensive reports designed for seamless audit processes",
    },
    {
      icon: BadgeCheck,
      title: "RBI/SEBI Compliance Alignment",
      description:
        "Ensure full alignment with Reserve Bank and SEBI guidelines",
    },
    {
      icon: Lock,
      title: "Data Privacy Consultation",
      description: "Expert guidance on data protection and privacy regulations",
    },
  ];

  return (
    <>
      {/* What This Service Covers */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What This Service Covers
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive compliance and audit support tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border border-slate-200 group hover:scale-105 transform duration-300"
              >
                <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreServiceCovers;
