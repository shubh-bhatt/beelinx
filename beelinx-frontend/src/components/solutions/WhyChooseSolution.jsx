import { motion } from "framer-motion";
import { FaLink, FaShieldAlt, FaHeadset, FaChartLine } from "react-icons/fa";

const Differentiators = () => {
  const features = [
    {
      icon: <FaLink className="text-5xl text-[#4CB4FB] mb-4" />,
      title: "Unified APIs across multiple banks & gateways",
      desc: "Connect effortlessly with multiple banking and payment systems through a single, unified API layer.",
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#4CB4FB] mb-4" />,
      title: "Security + Compliance-First Architecture",
      desc: "Our infrastructure is designed with end-to-end encryption, PCI DSS compliance, and strong data protection standards.",
    },
    {
      icon: <FaHeadset className="text-5xl text-[#4CB4FB] mb-4" />,
      title: "24/7 Integration & Fraud Monitoring Support",
      desc: "Get real-time monitoring, instant alerts, and dedicated technical support — anytime you need it.",
    },
    {
      icon: <FaChartLine className="text-5xl text-[#4CB4FB] mb-4" />,
      title: "Scalable for Startups, Enterprises & Government Scale",
      desc: "Easily scale your operations from small deployments to nationwide infrastructure without performance loss.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-32 w-full">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Why Choose Our Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600"
        >
          We go beyond basic integrations to deliver secure, scalable, and future-ready financial technology solutions.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow"
          >
            {item.icon}
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Differentiators;
