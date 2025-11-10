const Leadership = () => {
  const leaders = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      exp: "15+ years in fintech and banking technology",
      url: "https://images.pexels.com/photos/34553196/pexels-photo-34553196.jpeg",
    },
    {
      name: "Priya Sharma",
      role: "Co-Founder & CTO",
      exp: "Former tech lead at major payment gateway, 12 years experience",
      url: "https://images.pexels.com/photos/34600302/pexels-photo-34600302.jpeg",
    },
    {
      name: "Amit Patel",
      role: "Chief Compliance Officer",
      exp: "Ex-RBI regulator with 20 years in financial compliance",
      url: "https://images.pexels.com/photos/34573483/pexels-photo-34573483.jpeg",
    },
    {
      name: "Sneha Reddy",
      role: "VP of Product",
      exp: "10 years building fintech products for enterprises",
      url: "https://images.pexels.com/photos/4063856/pexels-photo-4063856.jpeg",
    },
  ];
  return (
    <div>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Experienced leaders driving innovation in fintech
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-linear-to-br from-blue-400 to-indigo-600 relative">
                  <img
                    src={leader.url}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {leader.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-3">
                    {leader.role}
                  </p>
                  <p className="text-sm text-gray-600">{leader.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
