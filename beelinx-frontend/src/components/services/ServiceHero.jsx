import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#4CB4FB] text-white py-42 px-6">
      <div className="max-w-7xl mx-auto text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Beyond APIs: Services That Help You Succeed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10"
        >
          Our expert-led services ensure smooth onboarding, compliance, and
          growth for MSMEs, enterprises, and government institutions.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white text-[#4CB4FB] font-semibold py-3 px-10 rounded-full transition-all  transform hover:-translate-y-2 duration-300 hover:scale-105 shadow-lg mr-5 cursor-pointer"
        >
          <Link to="/services/explore">Explore Services</Link>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}   
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white text-[#4CB4FB] font-semibold py-3 px-10 rounded-full transition-all  transform hover:-translate-y-2 duration-300 hover:scale-105 shadow-lg cursor-pointer"
        >
          <Link to="/">Talk to Sales</Link>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
