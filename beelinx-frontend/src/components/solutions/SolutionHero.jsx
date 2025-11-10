import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const HeroSolution = () => {
  return (
    <section className="w-full bg-[#4CB4FB] text-white py-42 px-6">
      <div className="max-w-7xl mx-auto text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Solutions Built for Every Business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-1xl font-bold mb-6"
        >
          From MSMEs to Enterprises to Government institutions, our APIs and
          services combine into tailored solutions that solve real-world
          problems.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white text-[#4CB4FB] font-semibold py-3 px-10 rounded-full transition-all  transform hover:-translate-y-2 duration-300 hover:scale-105 shadow-lg "
        >
          <Link to="/solutions/exploresolution">Explore Solution</Link>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSolution;
