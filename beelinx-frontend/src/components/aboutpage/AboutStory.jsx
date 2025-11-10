const AboutStory = () => {
  const timeline = [
    {
      year: "2018",
      event: "Founded",
      desc: "Started with a mission to democratize financial infrastructure",
    },
    {
      year: "2019",
      event: "First Major Partnership",
      desc: "Partnered with leading banks and payment gateways",
    },
    {
      year: "2021",
      event: "Government Recognition",
      desc: "Received RBI compliance and ISO certifications",
    },
    {
      year: "2023",
      event: "Scale Milestone",
      desc: "Processed over 100M transactions, serving 1000+ enterprises",
    },
    {
      year: "2024",
      event: "National Expansion",
      desc: "Expanded services across all Indian states",
    },
  ];
  return (
    <div>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Story
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center mb-12 ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    idx % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <span className="text-2xl font-bold text-blue-600">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                      {item.event}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutStory;
