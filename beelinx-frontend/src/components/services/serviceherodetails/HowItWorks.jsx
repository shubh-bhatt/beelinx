import { Users, Clock, TrendingUp, FileCheck } from "lucide-react";

const HowItWorks = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Comprehensive assessment of your needs and current setup",
      icon: Users,
    },
    {
      number: "02",
      title: "Implementation",
      description: "Configure and customize service to match your requirements",
      icon: TrendingUp,
    },
    {
      number: "03",
      title: "Monitoring",
      description: "Ongoing optimization and proactive support",
      icon: Clock,
    },
    {
      number: "04",
      title: "Compliance",
      description: "Regular audits and comprehensive reporting",
      icon: FileCheck,
    },
  ];

  return (
    <>
      {/* How It Works */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Our proven four-step process ensures success
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-blue-200 via-indigo-200 to-purple-200 transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-linear-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div className="w-14 h-14 bg-linear-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4 mt-4">
                    <step.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
