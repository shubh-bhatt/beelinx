import { Users, Zap, Shield, IndianRupee } from "lucide-react";

const ChooseService = () => {
  const valueProps = [
    {
      icon: Zap,
      title: "Speed",
      metric: "60% Faster",
      description:
        "Reduce go-live time significantly with our streamlined processes",
    },
    {
      icon: IndianRupee,
      title: "Cost Savings",
      metric: "₹5L+ Saved",
      description: "Avoid compliance penalties and reduce technical overhead",
    },
    {
      icon: Users,
      title: "Expertise",
      metric: "50+ Experts",
      description: "Handled by fintech and banking domain specialists",
    },
    {
      icon: Shield,
      title: "Trust",
      metric: "RBI Aligned",
      description: "Backed by RBI/NPCI-aligned frameworks and standards",
    },
  ];

  return (
    <>
      {/* Why Choose This Service */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose This Service
            </h2>
            <p className="text-xl text-slate-600">
              Proven value delivered across every engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <prop.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {prop.metric}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-slate-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseService;
