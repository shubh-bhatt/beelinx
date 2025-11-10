import { motion } from "framer-motion";
import { Plug, FileCheck, ShieldAlert, Workflow } from "lucide-react";

const ServicesSnapshot = () => {
  const services = [
    {
      icon: <Plug className="w-12 h-12 text-[#4CB4FB]" />,
      title: "Integration Support",
      description:
        "Seamless API onboarding with SDKs, sandbox environments, and dedicated developer assistance.",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-[#4CB4FB]" />,
      title: "Compliance & Reporting",
      description:
        "Automated KYC, AML, and transaction reporting aligned with regulatory standards.",
    },
    {
      icon: <ShieldAlert className="w-12 h-12 text-[#4CB4FB]" />,
      title: "Fraud Monitoring",
      description:
        "Real-time anomaly detection and alerts to secure every transaction.",
    },
    {
      icon: <Workflow className="w-12 h-12 text-[#4CB4FB]" />,
      title: "Custom Workflows",
      description:
        "Design workflows tailored to your business logic with dynamic triggers and conditions.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="services-snapshot">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services <span className="text-[#4CB4FB]">Snapshot</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A quick overview of our key service offerings that help you integrate, operate, and scale
          confidently.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSnapshot;
