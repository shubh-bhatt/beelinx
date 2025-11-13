import React, { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";
import { motion, useInView, useMotionValue } from "framer-motion";

const CustomerNumber = () => {
  const metrics = [
    { value: 50, suffix: "M+", label: "Transactions Monthly", duration: 2 },
    { value: 5000, suffix: "+", label: "MSMEs Onboarded", duration: 2 },
    { value: 99.9, suffix: "%", label: "Uptime SLA", duration: 2 },
    { value: 28, suffix: "", label: "States Covered", duration: 2 },
  ];

  // ✅ Animated Number Component
  const AnimatedNumber = ({ value, suffix, duration }) => {
    const ref = useRef(null);
    const count = useMotionValue(0);
    const inView = useInView(ref, { once: true });
    const [display, setDisplay] = useState("0");

    useEffect(() => {
      if (!inView) return;

      let start = null;
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        count.set(progress * value);
        setDisplay(Math.floor(progress * value).toLocaleString());
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, [inView, count, value, duration]);

    return (
      <span ref={ref}>
        {display}
        {suffix}
      </span>
    );
  };

  return (
    <section className="py-20 px-6 bg-[#4CB4FB] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Impact at Scale</h2>
          <p className="text-xl text-blue-100">
            Powering India's financial infrastructure
          </p>
        </div>

        {/* ✅ Responsive Grid: 2×2 on mobile, 1×4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all flex flex-col justify-center items-center min-h-[200px]">
                <TrendingUp className="w-8 h-8 mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedNumber
                    value={metric.value}
                    suffix={metric.suffix}
                    duration={metric.duration}
                  />
                </div>
                <div className="text-blue-100 text-sm md:text-base">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerNumber;
