import { motion } from "framer-motion";
import { FaBolt, FaShieldAlt, FaCheckCircle, FaExpand } from "react-icons/fa";

const productDetails = [
  {
    name: "Virtual Account APIs",
    icon: <FaBolt className="text-[#4CB4FB] text-3xl" />,
    description:
      "Generate unique virtual accounts for each customer to simplify collections and reconciliation.",
    usp: ["Instant setup", "Seamless integration", "Secure & scalable"],
  },
  {
    name: "UPI AutoPay",
    icon: <FaShieldAlt className="text-[#4CB4FB] text-3xl" />,
    description:
      "Enable recurring UPI payments for seamless subscription billing and automated debit flows.",
    usp: ["RBI compliant", "Fast execution", "Zero manual intervention"],
  },
  {
    name: "PAN Verification",
    icon: <FaCheckCircle className="text-[#4CB4FB] text-3xl" />,
    description:
      "Instantly validate PAN details for onboarding and KYC verification   with our simple and reliable API.",
    usp: ["Real-time checks", "High accuracy", "Secure data handling"],
  },
  {
    name: "Reconciliation Dashboard",
    icon: <FaExpand className="text-[#4CB4FB] text-3xl" />,
    description:
      "Track settlements, payouts, and transaction status in one unified dashboard.",
    usp: ["Custom insights", "Automated reports", "Enterprise ready"],
  },
];

const ProductDetailsPreview = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Product Detail Previews
        </motion.h2>

        <p className="text-gray-600 mb-12">
          Explore our powerful suite of APIs designed for secure, scalable, and
          compliant financial solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productDetails.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <ul className="text-gray-700 text-sm mb-4 text-left list-disc list-inside">
                {product.usp.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-[#4CB4FB] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#4CB4FB] transition"
              >
                View Details
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPreview;
