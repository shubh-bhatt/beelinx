import { motion } from "framer-motion";
import { Server, Zap, ShieldCheck, Wallet } from "lucide-react";

const WhyChooseUs = () => {
  const usps = [
    {
      icon: <Server className="w-12 h-12 text-[#4CB4FB]" />,
      title: "Single API for All Banks",
      description:
        "Integrate once and access multiple banks and payment rails seamlessly — saving development time and complexity.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-[#4CB4FB]" />,
      title: "Fast Onboarding & Compliance-Ready",
      description:
        "Start quickly with pre-verified compliance flows and easy KYC setup to launch your financial solutions faster.",
    },
    {
      icon: <Wallet className="w-12 h-12 text-[#4CB4FB]" />,
      title: "Cost-Effective vs Competitors",
      description:
        "Save up to 40% in API costs while enjoying enterprise-grade performance and reliability.",
    },
    {
      icon: <Zap className="w-12 h-12 text-[#4CB4FB]" />,
      title: "High Reliability & Uptime SLA",
      description:
        "Guaranteed uptime with active redundancy, smart failover systems, and 24x7 monitoring.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose <span className="text-[#4CB4FB]">Beelinix?</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Built for reliability, compliance, and speed — empowering businesses
          to handle financial operations efficiently and securely.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }} 
            >
              <div className="flex justify-center mb-4">{usp.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {usp.title}
              </h3>
              <p className="text-gray-600 text-sm">{usp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
