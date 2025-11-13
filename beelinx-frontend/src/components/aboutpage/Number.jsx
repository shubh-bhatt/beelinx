import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const Number = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const metrics = [
    { value: 250, suffix: "M+", label: "Transactions Processed" },
    { value: 1500, suffix: "+", label: "Enterprise Clients" },
    { value: 99.99, suffix: "%", label: "Uptime SLA" },
    { value: 28, suffix: "", label: "States Covered" },
    { value: 15, suffix: "+", label: "Industries Served" },
    { value: 24, suffix: "/7", label: "Support Available" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // trigger when 30% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-blue-500 via-blue-700 to-cyan-600 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Impact by the Numbers
        </h2>
        <p className="text-xl text-blue-100 mb-12 text-center">
          Trusted by businesses across India
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {hasAnimated ? (
                  <CountUp
                    start={0}
                    end={metric.value}
                    duration={2.5}
                    separator=","
                    decimals={metric.value % 1 !== 0 ? 2 : 0}
                  />
                ) : (
                  "0"
                )}
                {metric.suffix}
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Number;
