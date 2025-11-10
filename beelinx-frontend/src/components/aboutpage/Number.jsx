const Number = () => {
  const metrics = [
    { value: "250M+", label: "Transactions Processed" },
    { value: "1,500+", label: "Enterprise Clients" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "28", label: "States Covered" },
    { value: "15+", label: "Industries Served" },
    { value: "24/7", label: "Support Available" },
  ];
  return (
    <div>
      <section className="py-20 px-6 bg-linear-to-br from-blue-500 via-blue-700 to-cyan-600 text-white">
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
                  {metric.value}
                </div>
                <div className="text-blue-100 text-sm md:text-base">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Number;
