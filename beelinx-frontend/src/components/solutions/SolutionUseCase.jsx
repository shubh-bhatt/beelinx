import { motion } from "framer-motion";

const IndustryUseCases = () => {
  const useCases = [
    {
      title: "Fintech Startups",
      desc: "Simplify digital payment flows, automate reconciliations, and ensure compliance from day one.",
    },
    {
      title: "NBFCs",
      desc: "Streamline loan disbursements, EMI collections, and KYC verification with our integrated solutions.",
    },
    {
      title: "EdTech (Fees Collection)",
      desc: "Manage student fee payments, refunds, and reminders seamlessly — all under one dashboard.",
    },
    {
      title: "HealthTech (Insurance Payouts)",
      desc: "Automate claim settlements, track reimbursements, and improve turnaround time for payouts.",
    },
    {
      title: "E-commerce (Refund Automation)",
      desc: "Handle returns and instant refunds efficiently, improving customer trust and satisfaction.",
    },
    {
      title: "Government Schemes",
      desc: "Enable transparent fund disbursal, beneficiary tracking, and real-time reporting for public programs.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-32 w-full">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Industry Use Cases
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600"
        >
          See how our platform empowers businesses across industries.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {useCases.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
            </div>
            <motion.button
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-[#4CB4FB] font-medium hover:underline self-start"
            >
              See How It Works →
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustryUseCases;
