import { motion } from "framer-motion";
import ReportImage  from"../../assets/Report-Image.jpeg";

const blogPosts = [
  {
    title: "How Fintech APIs Are Transforming MSME Banking",
    excerpt:
      "Explore how unified API stacks simplify integrations, improve efficiency, and accelerate digital payments.",
    image: "/blog/api-transformation.jpg",
    link: "/blog/fintech-apis-transforming-msme-banking",
  },
  {
    title: "The Future of UPI for Businesses in 2025",
    excerpt:
      "Learn about UPI Autopay, intent-based collections, and upcoming RBI frameworks that are reshaping B2B payments.",
    image: "/blog/upi-future.jpg",
    link: "/blog/future-of-upi-2025",
  },
  {
    title: "5 Compliance Mistakes Startups Make — and How to Avoid Them",
    excerpt:
      "A quick guide for fintech founders to navigate KYC, AML, and data privacy compliance without stress.",
    image: "/blog/compliance-guide.jpg",
    link: "/blog/compliance-mistakes",
  },
];

const ResourcesInsights = () => {
  return (
    <section className="py-20 bg-white" id="resources">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Resources & Insights
        </h2>

      
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-[#4CB4FB] font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#4CB4FB] text-white rounded-3xl p-10 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Download Our 2025 Fintech Trends Report
          </h3>
          <p className="mb-6 text-indigo-100 max-w-2xl mx-auto">
            Get deep insights into API-led payment innovation and the future of
            embedded finance. Fill the form to get your free copy.
          </p>

         
          <div className="flex justify-center">
            <img
              src={ReportImage}
              alt="2025 Fintech Trends Report"
              className="w-full md:w-2/3 h-80 rounded-xl border-0 object-cover "
            ></img>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesInsights;
