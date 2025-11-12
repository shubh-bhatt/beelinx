import { Link } from "react-router-dom";
import productHeroImage from "/images/illustrations/api-ecosystem-image.png"; // make sure the path is correct
import { motion } from "framer-motion";

const ProductHero = () => {
  return (
    <section className="relative bg-linear-to-b from-indigo-50 to-white  px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Powerful <span className="text-[#4CB4FB]">APIs</span> to Build the
            Future of Finance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0"
          >
            Seamless, secure, and scalable APIs for payments, verification, and
            reconciliation. Beelinix offers seamless integration,
            enterprise-grade security, and high scalability through its API
            suite — enabling businesses to manage payments, verify users, and
            reconcile transactions with unmatched efficiency and reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <Link
              to="/products/product-detailes"
              className="bg-[#4CB4FB] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3aa2e8] transition"
            >
              Explore Products
            </Link>
            <a
              href="#contact"
              className="border border-[#4CB4FB] text-[#4CB4FB] px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition"
            >
              Request Demo
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={productHeroImage}
            alt="API Ecosystem"
            className="w-full max-w-md md:max-w-lg drop-shadow-xl"
          />
        </motion.div>
      </div>

      {/* Decorative Blurred Circles */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-0 w-[250px] h-[250px] bg-blue-200/40 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default ProductHero;
