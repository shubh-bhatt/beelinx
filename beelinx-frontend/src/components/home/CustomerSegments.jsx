import { motion } from "framer-motion";
import { Building2, Briefcase, Landmark } from "lucide-react";

const CustomerSegments = () => {
  const segments = [
    {
      icon: <Building2 className="w-12 h-12 text-[#4CB4FB]" />,
      title: "MSMEs",
      description: "Affordable & scalable APIs designed for growing businesses.",
      cta: "Learn More",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-[#4CB4FB]" />,
      title: "Enterprises",
      description:
        "High-volume, robust infrastructure built for performance and reliability.",
      cta: "Learn More",
    },
    {
      icon: <Landmark className="w-12 h-12 text-[#4CB4FB]" />,
      title: "Government / Institutions",
      description:
        "Secure, compliant, and scalable bulk payment APIs for public systems.",
      cta: "Learn More",
    },
  ];

  
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Customer Segments
        </h2>
        <p className="text-xl font-medium text-gray-500 mb-12  tracking-wide">
          Who We Serve
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              className="p-10 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="flex justify-center mb-4">{segment.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {segment.title}
              </h3>
              <p className="text-gray-600 mb-6">{segment.description}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-[#4CB4FB] font-semibold border border-[#4CB4FB] px-5 py-2 rounded-full hover:bg-[#4CB4FB] hover:text-white transition-colors"
              >
                {segment.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;
