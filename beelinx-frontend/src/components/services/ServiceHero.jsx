import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#4CB4FB] text-white py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Beyond APIs: Services That Help You Succeed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
        >
          Our expert-led services ensure smooth onboarding, compliance, and
          growth for MSMEs, enterprises, and government institutions.
        </motion.p>

        {/* ✅ Button Group - responsive fix */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            to="/services/explore"
            className="bg-white text-[#4CB4FB] font-semibold py-3 px-8 sm:px-10 rounded-full transition-all transform hover:-translate-y-1 duration-300 hover:scale-105 shadow-lg w-full sm:w-auto text-center"
          >
            Explore Services
          </Link>

          <Link
            to="/"
            className="bg-white text-[#4CB4FB] font-semibold py-3 px-8 sm:px-10 rounded-full transition-all transform hover:-translate-y-1 duration-300 hover:scale-105 shadow-lg w-full sm:w-auto text-center"
          >
            Talk to Sales
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
