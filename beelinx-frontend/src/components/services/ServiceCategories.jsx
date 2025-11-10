import { motion } from "framer-motion";
import {
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaExclamationTriangle,
  FaTools,
  FaChartBar,
} from "react-icons/fa";

const categories = [
  {
    title: "Integration & Onboarding",
    icon: <FaCogs className="text-6xl text-[#4CB4FB] mb-4" />,
    points: [
      "API setup support",
      "Sandbox access & walkthroughs",
      "Dedicated onboarding specialist",
    ],
  },
  {
    title: "Compliance & Security",
    icon: <FaShieldAlt className="text-6xl text-[#4CB4FB] mb-4" />,
    points: [
      "RBI compliance guidance",
      "KYC/AML support",
      "Data privacy & audit assistance",
    ],
  },
  {
    title: "Reconciliation & Reporting Support",
    icon: <FaChartLine className="text-6xl text-[#4CB4FB] mb-4" />,
    points: [
      "Custom financial reports",
      "Settlement dashboards",
      "API-driven reconciliation setup",
    ],
  },
  {
    title: "Fraud Monitoring & Risk Management",
    icon: <FaExclamationTriangle className="text-6xl text-[#4CB4FB] mb-4" />,
    points: [
      "Transaction monitoring",
      "Alerts & dispute handling",
      "Risk analytics",
    ],
  },
  {
    title: "Custom Development & Consulting",
    icon: <FaTools className="text-6xl text-[#4CB4FB] mb-4" />,
    points: [
      "Tailored workflows",
      "Bank/gateway integrations",
      "Advisory for scaling payments infra",
    ],
  },
  {
    title: "Analytics & Optimization",
    icon: <FaChartBar className="text-6xl text-[#4CB4FB] mb-4" />,
    points: [
      "Real-time transaction insights",
      "Performance optimization reports",
      "Growth tracking dashboards",
    ],
  },
];

const ServiceCategories = () => {
  return (
    <section className="w-full bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Our Service Categories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto"
        >
          Explore our range of expert-led services designed to simplify integration,
          ensure compliance, and support your growth.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="bg-white w-full shadow-lg rounded-2xl p-10 border border-gray-200 hover:shadow-2xl transition-all"
            >
              <div className="w-full flex flex-col items-center text-center">
                <div className="mb-4">{cat.icon}</div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {cat.title}
                </h3>

                <ul className="space-y-2 text-gray-600">
                  {cat.points.map((point, i) => (
                    <li key={i} className="flex items-start justify-center">
                      <span className="text-[#4CB4FB] font-bold mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
