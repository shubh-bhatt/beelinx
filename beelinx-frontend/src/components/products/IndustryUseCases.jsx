import { motion } from "framer-motion";
import { FaBuilding, FaIndustry, FaLandmark } from "react-icons/fa";

const useCases = [
  {
    icon: <FaIndustry className="text-[#4CB4FB] text-4xl mb-4" />,
    title: "MSMEs",
    description: "Simplify collections, vendor payouts, and expense reconciliation for growing businesses.",
  },
  {
    icon: <FaBuilding className="text-[#4CB4FB] text-4xl mb-4" />,
    title: "Enterprises",
    description: "Handle high-volume transactions and multi-account operations with ease and automation.",
  },
  {
    icon: <FaLandmark className="text-[#4CB4FB] text-4xl mb-4" />,
    title: "Government",
    description: "Power efficient subsidy distribution and citizen verification with secure, scalable APIs.",
  },
];

const IndustryUseCases = () => {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Industry Use Cases
        </motion.h2>

        <p className="text-gray-600 mb-12">
          Our APIs empower organizations across sectors to automate, scale, and innovate faster.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center">{useCase.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCases;
