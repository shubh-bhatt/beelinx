import { motion } from "framer-motion";
import heroImage from "../../assets/heroImage.svg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-32 px-6 md:px-24">
      {/* === BACKGROUND ANIMATED GLOWS === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-200/40 rounded-full blur-3xl -z-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute bottom-10 left-0 w-[250px] h-[250px] bg-blue-200/40 rounded-full blur-3xl -z-10"
      ></motion.div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* === LEFT CONTENT === */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            The Future of <span className="text-[#4CB4FB]">Financial APIs</span>
            <br /> for MSMEs, Enterprises & Government
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Simplify payments, automate financial workflows, and connect
            securely with banks and partners using Beelinix’s powerful API
            infrastructure.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4CB4FB] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#4CB4FB] text-[#4CB4FB] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
            >
              Request Demo
            </motion.a>
          </motion.div>
        </motion.div>

        {/* === RIGHT IMAGE === */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={heroImage}
            alt="Financial Data Flow Illustration"
            className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
