import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Government Department — Secure Subsidy Disbursement",
    text: "We enabled a government institution to distribute subsidies securely and transparently through API-linked payment rails.",
    name: "Finance Department, Govt. of India",
  },
  {
    title: "MSME — Fast UPI Integration in 7 Days",
    text: "Our onboarding team helped an MSME integrate UPI payments within a week, boosting their sales and automation.",
    name: "Founder, SmallBiz Fintech",
  },
];

const CaseStudies = () => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          Case Studies & Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-10 text-left hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {study.title}
              </h3>
              <p className="text-gray-600 mb-4">{study.text}</p>
              <p className="text-[#4CB4FB] font-semibold">— {study.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
