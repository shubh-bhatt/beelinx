import { motion } from "framer-motion";

const SolutionSegments = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16 lg:px-32 w-full">
      <div className="text-center max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bold mb-16 text-5xl text-gray-700"
        >
          Solutions By Segments
        </motion.h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {[
            {
              title: "MSEM Solutions",
              points: [
                "Easy UPI collections (QR, Internet, Virtual Accounts)",
                "Vendor & employee payout (IMPS, NEFT)",
                "Instant account & KYC verification",
                "Affordable pricing",
              ],
              button: "Get MSEM Demo",
            },
            {
              title: "Enterprise Solutions",
              points: [
                "High-volume transaction processing",
                "Multi-bank integrations for redundancy",
                "Auto reconciliation & settlement dashboards",
                "Custom compliance reporting",
              ],
              button: "Request Enterprise Consultation",
            },
            {
              title: "Government & Institutional Solutions",
              points: [
                "Bulk disbursement (subsidies, pensions, scholarships)",
                "Aadhaar & PAN verification APIs",
                "Secure, compliant payment rails (NEFT, RTGS, UPI AutoPay)",
                "Fraud monitoring & reporting support",
              ],
              button: "Talk to Government Solutions Expert",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="bg-white shadow-lg rounded-2xl text-gray-700 p-8 border border-gray-200 hover:shadow-2xl transition-all flex flex-col justify-between h-[450px]"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">{item.title}</h3>
                <ul className="text-gray-700 text-left mb-8 space-y-3 leading-relaxed">
                  {item.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
              <button className="bg-[#4CB4FB] px-5 py-3 rounded-full font-semibold text-white hover:bg-[#4CB4FB] transition-all w-full">
                {item.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSegments;
