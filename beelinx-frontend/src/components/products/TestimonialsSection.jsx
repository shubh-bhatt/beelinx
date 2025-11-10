import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    logo: "/images/customers/customer1.png",
    quote: "Beelinx APIs helped us automate payouts and reduce operational costs by 40%.",
    name: "FinEdge Solutions",
  },
  {
    logo: "/images/customers/customer2.png",
    quote: "The seamless integration and documentation made it easy for our developers to go live in days.",
    name: "QuickPay India",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          Trusted by Leading Businesses
        </motion.h2>

        {/* <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
          <img src="/images/Customers/customer1.avif" alt="Client 1" className="h-20 w-20 grayscale rounded-full object-cover hover:grayscale-0 transition" />
          <img src="/images/Customers/customer2.avif" alt="Client 2" className="h-20 w-20 grayscale rounded-full object-cover hover:grayscale-0 transition" />
          <img src="/images/Customers/customer3.avif" alt="Client 3" className="h-20 w-20 grayscale rounded-full object-cover hover:grayscale-0 transition" />
        </div> */}

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: false }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md text-left"
            >
              <FaQuoteLeft className="text-[#4CB4FB] text-2xl mb-3" />
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <p className="font-semibold text-gray-900">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
