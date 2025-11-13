import { motion } from "framer-motion";
import { Banknote, Smartphone, ShieldCheck, BarChart3 } from "lucide-react";

const CoreOfferings = () => {
  const offerings = [
    {
      icon: <Banknote className="w-10 h-10 text-[#4CB4FB]" />,
      title: "Collect",
      description: "Virtual Accounts, UPI QR, Intent",
      detail:
        "Seamlessly receive payments across multiple channels with instant settlement.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-[#4CB4FB]" />,
      title: "Pay",
      description: "IMPS, NEFT, RTGS, UPI Autopay, Payouts",
      detail:
        "Automate disbursements with multiple payment modes and high success rates.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#4CB4FB]" />,
      title: "Verify",
      description: "PAN, Aadhaar, Bank Account Verification",
      detail:
        "Ensure compliance and prevent fraud with instant identity verifications.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-[#4CB4FB]" />,
      title: "Reconcile",
      description: "Automated reconciliation & reporting",
      detail: "Get real-time insights and automate your accounting workflow.",
    },
  ];

  // Parent section animation (smooth stagger)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // Card animation (fade up)
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Core Offerings
        </motion.h2>

        <motion.p
          className="text-xl font-semibold text-gray-600 mb-12 tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 group"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>

              {/* Hover detail overlay */}
              <motion.div
                className="absolute inset-0 bg-white bg-opacity-95 rounded-2xl flex flex-col items-center justify-center px-6 text-gray-700 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500"
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1 }}
              >
                <p className="text-base">{item.detail}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreOfferings;
