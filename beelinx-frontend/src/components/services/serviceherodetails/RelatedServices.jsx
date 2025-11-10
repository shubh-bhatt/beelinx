import { ArrowRight } from "lucide-react";

const RelatedServices = () => {
  const relatedServices = [
    {
      title: "API Gateway Management",
      description: "Secure and scalable API infrastructure for your business",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Payment Orchestration",
      description: "Unified payment processing across multiple providers",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Developer Sandbox",
      description: "Test and integrate with our platform risk-free",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <>
      {/* Related Services */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Related Services & Products
            </h2>
            <p className="text-xl text-slate-600">
              Explore our complete suite of solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border border-slate-200 group cursor-pointer"
              >
                <div
                  className={`w-full h-2 bg-linear-to-r ${service.gradient} rounded-full mb-4`}
                ></div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedServices;
