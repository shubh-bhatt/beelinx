import { motion } from "framer-motion";
import { FaBuilding, FaRocket, FaSync } from "react-icons/fa";

const CaseStudies = () => {
  const cases = [
    {
      icon: <FaBuilding className="text-4xl text-[#4CB4FB] mb-4" />,
      title: "₹500 Cr Subsidy Distribution",
      desc: "Enabled secure and transparent subsidy disbursal for a major government department, ensuring real-time fund tracking and beneficiary validation.",
    },
    {
      icon: <FaRocket className="text-4xl text-[#4CB4FB] mb-4" />,
      title: "MSME SaaS Growth Acceleration",
      desc: "Helped an MSME SaaS platform scale to 100K+ monthly payments through seamless onboarding, automation, and API integration.",
    },
    {
      icon: <FaSync className="text-4xl text-[#4CB4FB] mb-4" />,
      title: "Automated Reconciliation for NBFC",
      desc: "Simplified multi-bank reconciliation and automated daily settlements for a leading NBFC handling thousands of transactions daily.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-32 w-full">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Case Studies & Impact Stories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600"
        >
          Real-world success stories showcasing how our platform transforms
          operations across sectors.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cases.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow text-center"
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

export default CaseStudies;
