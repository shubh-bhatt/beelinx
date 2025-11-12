import { motion } from "framer-motion";
import { FaHandsHelping, FaBuilding, FaHeadset, FaCheckCircle } from "react-icons/fa";

const differentiators = [
  {
    icon: <FaHandsHelping className="text-5xl text-[#4CB4FB] mb-4" />,
    title: "End-to-End Support",
    desc: "From integration to compliance and scaling — we’re with you every step.",
  },
  {
    icon: <FaBuilding className="text-5xl text-[#4CB4FB] mb-4" />,
    title: "Strong Partnerships",
    desc: "Trusted integrations with top banks and payment gateways across India.",
  },
  {
    icon: <FaHeadset className="text-5xl text-[#4CB4FB] mb-4" />,
    title: "24/7 Dedicated Support",
    desc: "Always available to ensure your systems run smoothly and reliably.",
  },
  {
    icon: <FaCheckCircle className="text-5xl text-[#4CB4FB] mb-4" />,
    title: "Flexible & Compliant",
    desc: "MSME-friendly, enterprise-ready, and fully compliant for government needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
