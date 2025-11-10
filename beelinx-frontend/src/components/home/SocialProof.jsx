import { motion } from "framer-motion";

const logos = [
  "/logos/axis.png",
  "/logos/icici.png",
  "/logos/kotak.png",
  "/logos/sbi.png",
  "/logos/paytm.png",
];

const testimonials = [
  {
    name: "Rahul Verma",
    company: "TechGrow MSME",
    feedback:
      "Beelinix APIs helped us automate payments and verification, saving 40% in operational costs.",
  },
  {
    name: "Priya Singh",
    company: "FinEdge Solutions",
    feedback:
      "Their robust APIs scaled effortlessly as our transaction volumes grew. Truly enterprise-grade!",
  },
  {
    name: "Arun Iyer",
    company: "GovPay Systems",
    feedback:
      "Security and compliance are top-notch. The onboarding process was seamless.",
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-gray-50 text-center overflow-hidden">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        Trusted By Leading Institutions
      </h2>

      <div className="relative mb-16">
        <motion.div
          className="flex items-center gap-16 whitespace-nowrap px-6 no-scrollbar"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Customer Logo"
              className="h-10 opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg"
          >
            <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
            <h4 className="font-semibold text-gray-800">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.company}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-[#4CB4FB] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#4CB4FB] transition"
        >
          See Customer Stories
        </motion.button>
      </div>
    </section>
  );
};

export default SocialProof;
