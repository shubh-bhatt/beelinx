import { motion } from "framer-motion";
import {
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaExclamationTriangle,
} from "react-icons/fa";

const services = [
  {
    title: "Integration & Onboarding",
    icon: <FaCogs className="text-6xl text-[#4CB4FB] mb-4" />,
    description:
      "Simplify your API integrations with guided onboarding, sandbox walkthroughs, and dedicated support at every step.",
    benefit: "Accelerates go-live time and reduces integration errors.",
  },
  {
    title: "Compliance & Security",
    icon: <FaShieldAlt className="text-6xl text-[#4CB4FB] mb-4" />,
    description:
      "Ensure your payment infrastructure aligns with RBI and global data privacy standards with built-in KYC/AML tools.",
    benefit: "Builds customer trust and prevents regulatory penalties.",
  },
  {
    title: "Reconciliation & Reporting",
    icon: <FaChartLine className="text-6xl text-[#4CB4FB] mb-4" />,
    description:
      "Automate settlements and generate accurate financial reports via custom dashboards and reconciliation APIs.",
    benefit: "Boosts transparency and operational efficiency.",
  },
  {
    title: "Fraud Monitoring & Risk Management",
    icon: <FaExclamationTriangle className="text-6xl text-[#4CB4FB] mb-4" />,
    description:
      "Protect your transactions with real-time fraud detection, alert systems, and advanced dispute handling modules.",
    benefit: "Enhances security and minimizes revenue losses.",
  },
];

const DeepDiveServices = () => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Deep-Dive Service Blocks
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto"
        >
          A closer look into our specialized services designed to empower your
          business with reliability, compliance, and scalability.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-gray-50 p-10 rounded-2xl border border-gray-200 text-left shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col items-start">
                {service.icon}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-[#4CB4FB] font-medium mb-6">
                   {service.benefit}
                </p>
                <button className="bg-[#4CB4FB] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#4CB4FB] transition-all">
                  Request Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeepDiveServices;
