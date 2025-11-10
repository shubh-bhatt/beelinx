import { motion } from "framer-motion";
import { FaNetworkWired, FaPlug, FaCode, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaNetworkWired className="text-blue-600 text-4xl mb-4" />,
    title: "One Unified Platform",
    description:
      "Integrate seamlessly with multiple banks and gateways using a single, powerful API infrastructure.",
  },
  {
    icon: <FaPlug className="text-blue-600 text-4xl mb-4" />,
    title: "Plug-and-Play APIs",
    description:
      "Start building instantly with modular APIs that fit effortlessly into your existing systems.",
  },
  {
    icon: <FaCode className="text-blue-600 text-4xl mb-4" />,
    title: "Developer-First Approach",
    description:
      "Comprehensive documentation, SDKs, and sandbox environments built to accelerate development.",
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-4xl mb-4" />,
    title: "Compliance & Security",
    description:
      "Fully compliant with RBI guidelines, ISO standards, and PCI DSS for enterprise-grade data protection.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Why Choose Our APIs
        </motion.h2>

        <p className="text-gray-600 mb-12">
          Build confidently with enterprise-grade APIs designed for performance, reliability, and compliance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
